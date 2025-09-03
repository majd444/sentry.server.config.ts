<?php
/**
 * Plugin Name: Vaste Chatbot
 * Description: Simple plugin to inject your SaaS chatbot on any WordPress site. Install, set your Chatbot Key and Script URL, done.
 * Version: 1.0.0
 * Author: Vaste
 * License: MIT
 * Text Domain: vaste-chatbot
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Vaste_Chatbot_Plugin {
    const OPTION_KEY = 'vaste_chatbot_options';

    public function __construct() {
        // Admin
        add_action('admin_menu', [$this, 'add_settings_page']);
        add_action('admin_init', [$this, 'register_settings']);

        // Frontend injection
        add_action('wp_footer', [$this, 'inject_chatbot_script']);

        // Shortcode
        add_shortcode('vaste_chatbot', [$this, 'shortcode']);
    }

    public function add_settings_page() {
        add_options_page(
            __('Vaste Chatbot', 'vaste-chatbot'),
            __('Vaste Chatbot', 'vaste-chatbot'),
            'manage_options',
            'vaste-chatbot',
            [$this, 'render_settings_page']
        );
    }

    public function register_settings() {
        register_setting(self::OPTION_KEY, self::OPTION_KEY, [
            'sanitize_callback' => [$this, 'sanitize_options']
        ]);

        add_settings_section(
            'vaste_chatbot_main',
            __('Chatbot Settings', 'vaste-chatbot'),
            function () {
                echo '<p>' . esc_html__('Provide your chatbot script URL and key. The script will be injected site‑wide in the footer. You can also use the [vaste_chatbot] shortcode to inject it on a specific page.', 'vaste-chatbot') . '</p>';
            },
            self::OPTION_KEY
        );

        add_settings_field(
            'enabled',
            __('Enable site‑wide injection', 'vaste-chatbot'),
            [$this, 'field_enabled'],
            self::OPTION_KEY,
            'vaste_chatbot_main'
        );

        add_settings_field(
            'script_url',
            __('Script URL', 'vaste-chatbot'),
            [$this, 'field_script_url'],
            self::OPTION_KEY,
            'vaste_chatbot_main'
        );

        add_settings_field(
            'chatbot_key',
            __('Chatbot Key / Agent ID', 'vaste-chatbot'),
            [$this, 'field_chatbot_key'],
            self::OPTION_KEY,
            'vaste_chatbot_main'
        );

        add_settings_field(
            'extra_attrs',
            __('Extra data-* attributes (optional)', 'vaste-chatbot'),
            [$this, 'field_extra_attrs'],
            self::OPTION_KEY,
            'vaste_chatbot_main'
        );
    }

    public function sanitize_options($input) {
        $output = $this->get_default_options();

        $output['enabled'] = isset($input['enabled']) ? (bool)$input['enabled'] : false;
        $output['script_url'] = isset($input['script_url']) ? esc_url_raw(trim($input['script_url'])) : '';
        $output['chatbot_key'] = isset($input['chatbot_key']) ? sanitize_text_field(trim($input['chatbot_key'])) : '';

        // Extra attrs as key=value lines
        $extra = [];
        if (!empty($input['extra_attrs'])) {
            $lines = preg_split("/\r\n|\r|\n/", $input['extra_attrs']);
            foreach ($lines as $line) {
                $line = trim($line);
                if ($line === '' || strpos($line, '=') === false) continue;
                list($k, $v) = array_map('trim', explode('=', $line, 2));
                if ($k !== '') {
                    $extra[sanitize_key($k)] = sanitize_text_field($v);
                }
            }
        }
        $output['extra_attrs'] = $extra;

        return $output;
    }

    private function get_default_options() {
        return [
            'enabled' => false,
            'script_url' => '', // e.g. https://cdn.example.com/chatbot.js
            'chatbot_key' => '', // e.g. agent or public key
            'extra_attrs' => [],
        ];
    }

    private function get_options() {
        $opts = get_option(self::OPTION_KEY, []);
        if (!is_array($opts)) $opts = [];
        return wp_parse_args($opts, $this->get_default_options());
    }

    public function field_enabled() {
        $opts = $this->get_options();
        echo '<label><input type="checkbox" name="' . esc_attr(self::OPTION_KEY) . '[enabled]" value="1" ' . checked($opts['enabled'], true, false) . '> ' . esc_html__('Inject on all pages (in footer)', 'vaste-chatbot') . '</label>';
    }

    public function field_script_url() {
        $opts = $this->get_options();
        echo '<input type="url" class="regular-text" name="' . esc_attr(self::OPTION_KEY) . '[script_url]" value="' . esc_attr($opts['script_url']) . '" placeholder="https://cdn.your-saas.com/widget.js" />';
    }

    public function field_chatbot_key() {
        $opts = $this->get_options();
        echo '<input type="text" class="regular-text" name="' . esc_attr(self::OPTION_KEY) . '[chatbot_key]" value="' . esc_attr($opts['chatbot_key']) . '" placeholder="your-public-key-or-agent-id" />';
        echo '<p class="description">' . esc_html__('Will be added to the script tag as data-key="..."', 'vaste-chatbot') . '</p>';
    }

    public function field_extra_attrs() {
        $opts = $this->get_options();
        $value = '';
        foreach ($opts['extra_attrs'] as $k => $v) {
            $value .= $k . '=' . $v . "\n";
        }
        echo '<textarea class="large-text code" rows="5" name="' . esc_attr(self::OPTION_KEY) . '[extra_attrs]" placeholder="e.g.\ncolor=#1f2937\nposition=bottom-right\napi_base=https://api.example.com">' . esc_textarea(trim($value)) . '</textarea>';
        echo '<p class="description">' . esc_html__('One attribute per line in the form key=value. These will be added as data-key="value" on the script tag.', 'vaste-chatbot') . '</p>';
    }

    public function render_settings_page() {
        if (!current_user_can('manage_options')) return;
        ?>
        <div class="wrap">
            <h1><?php echo esc_html__('Vaste Chatbot', 'vaste-chatbot'); ?></h1>
            <form action="options.php" method="post">
                <?php
                settings_fields(self::OPTION_KEY);
                do_settings_sections(self::OPTION_KEY);
                submit_button();
                ?>
            </form>
            <hr />
            <h2><?php echo esc_html__('Usage', 'vaste-chatbot'); ?></h2>
            <ul style="list-style: disc; margin-left: 20px;">
                <li><?php echo esc_html__('To inject on every page, check "Enable site‑wide injection".', 'vaste-chatbot'); ?></li>
                <li><?php echo esc_html__('To inject on specific pages only, leave it unchecked and add the [vaste_chatbot] shortcode to the desired page or post.', 'vaste-chatbot'); ?></li>
            </ul>
        </div>
        <?php
    }

    private function render_script_tag($overrides = []) {
        $opts = $this->get_options();
        $opts = array_merge($opts, $overrides);

        $script_url = isset($opts['script_url']) ? trim($opts['script_url']) : '';
        $key = isset($opts['chatbot_key']) ? trim($opts['chatbot_key']) : '';

        if ($script_url === '' || $key === '') {
            return; // Missing required values
        }

        // Build attributes
        $attrs = [
            'src' => esc_url($script_url),
            'async' => true,
            'data-key' => esc_attr($key),
        ];

        if (!empty($opts['extra_attrs']) && is_array($opts['extra_attrs'])) {
            foreach ($opts['extra_attrs'] as $k => $v) {
                $data_key = 'data-' . sanitize_key($k);
                $attrs[$data_key] = esc_attr($v);
            }
        }

        // Output script tag
        echo "\n";
        echo '<script';
        foreach ($attrs as $k => $v) {
            if ($v === true) {
                echo ' ' . $k;
            } else {
                echo ' ' . $k . '="' . $v . '"';
            }
        }
        echo '></script>' . "\n";
    }

    public function inject_chatbot_script() {
        $opts = $this->get_options();
        if (!empty($opts['enabled'])) {
            $this->render_script_tag();
        }
    }

    public function shortcode($atts) {
        $opts = $this->get_options();
        $atts = shortcode_atts([
            'script_url' => $opts['script_url'],
            'key' => $opts['chatbot_key'],
        ], $atts, 'vaste_chatbot');

        ob_start();
        $this->render_script_tag([
            'script_url' => $atts['script_url'],
            'chatbot_key' => $atts['key'],
        ]);
        return ob_get_clean();
    }
}

new Vaste_Chatbot_Plugin();
