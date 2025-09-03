(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/create-agent/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Puzzle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/puzzle.js [app-client] (ecmascript) <export default as Puzzle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/client.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/convex/_generated/api'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/hooks/use-toast'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/popover'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/input'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/textarea'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/tabs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/slider'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/simple-chat-form'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/chat-interface'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/alert'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/card'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/switch'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/components/ui/dialog'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Constants
const pluginLogos = [
    {
        id: "wordpress",
        name: "WordPress",
        logoUrl: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png"
    },
    {
        id: "whatsapp",
        name: "WhatsApp",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    },
    {
        id: "html-css",
        name: "HTML & CSS Plugin",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
    },
    {
        id: "instagram",
        name: "Instagram",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
    },
    {
        id: "messenger",
        name: "Meta",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
    },
    {
        id: "telegram",
        name: "Telegram",
        logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
    },
    {
        id: "discord",
        name: "Discord",
        logoUrl: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
    }
];
const colorPalette = [
    '#6B7280',
    '#EF4444',
    '#EC4899',
    '#8B5CF6',
    '#7C3AED',
    '#4F46E5',
    '#3B82F6',
    '#06B6D4',
    '#14B8A6',
    '#10B981',
    '#84CC16',
    '#F59E0B',
    '#F97316',
    '#FFFFFF'
];
// Main Component
function CreateAgentModal(param) {
    let { onClose } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const createAgent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(api.agents.create);
    const updateAgent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(api.agents.update);
    const saveFineTuning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])(api.fineTuning.saveFineTuningOutput);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const { toast } = useToast();
    // State Management
    const [assistantName, setAssistantName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('AI Assistant');
    const [welcomeMessage, setWelcomeMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [collectUserInfo, setCollectUserInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [systemPrompt, setSystemPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("You are a helpful AI assistant.");
    const [headerColor, setHeaderColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#3B82F6");
    const [accentColor, setAccentColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#00D4FF");
    const [backgroundColor, setBackgroundColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#FFFFFF");
    const [temperature, setTemperature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.7);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("configuration");
    const [isTopColorPopoverOpen, setIsTopColorPopoverOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAccentColorPopoverOpen, setIsAccentColorPopoverOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBackgroundColorPopoverOpen, setIsBackgroundColorPopoverOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedContentIndex, setSelectedContentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [extractedContents, setExtractedContents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [extractedLinks, setExtractedLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [extractionUrl, setExtractionUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isExtracting, setIsExtracting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showError, setShowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showChat, setShowChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profileImage, setProfileImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [initials, setInitials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('AA');
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [startPos, setStartPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [agentIdState, setAgentIdState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formFields, setFormFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Event Handlers
    const handleExtract = async ()=>{
        if (!extractionUrl) {
            setError('Please enter a URL to extract content from');
            return;
        }
        try {
            new URL(extractionUrl);
        } catch (e) {
            setError('Please enter a valid URL (include http:// or https://)');
            return;
        }
        setIsExtracting(true);
        setError(null);
        try {
            var _responseData_structured;
            const response = await fetch('/api/extract', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: extractionUrl
                })
            });
            const responseData = await response.json();
            if (!response.ok || (responseData === null || responseData === void 0 ? void 0 : responseData.success) === false) {
                const msg = (responseData === null || responseData === void 0 ? void 0 : responseData.error) || "".concat(response.status, " ").concat(response.statusText);
                throw new Error(msg || 'Failed to extract content from URL');
            }
            if (!responseData.text && (!responseData.structured || responseData.structured.links.length === 0)) {
                throw new Error('No extractable content found on the page');
            }
            // Prepare preview and capped content for saving
            const MAX_SAVE_CHARS = 200_000;
            const textToSave = (responseData.text || '').slice(0, MAX_SAVE_CHARS);
            const newContent = {
                url: extractionUrl,
                text: textToSave,
                structured: responseData.structured || {
                    tabs: [],
                    inputs: [],
                    buttons: [],
                    links: []
                }
            };
            // Save to knowledge base only if authenticated; ensure agent exists
            if (user) {
                try {
                    const agentId = await ensureAgentSaved();
                    const insertedId = await saveFineTuning({
                        agentId: String(agentId),
                        input: "url:".concat(extractionUrl),
                        output: textToSave,
                        metadata: {
                            structured: responseData.structured,
                            source: 'edge-extract',
                            lengthOriginal: (responseData.text || '').length
                        }
                    });
                    console.log('[create-agent] Saved fine-tuning entry:', String(insertedId));
                    toast({
                        className: 'bg-green-500 text-white',
                        title: 'Saved to Knowledge Base',
                        description: "Saved ".concat(textToSave.length, " chars from ").concat(extractionUrl)
                    });
                } catch (e) {
                    console.error('[create-agent] Save to knowledge base failed:', e);
                    toast({
                        className: 'bg-yellow-500 text-white',
                        title: 'Preview only',
                        description: 'Could not save to Knowledge Base. Content still available below.'
                    });
                }
            } else {
                toast({
                    className: 'bg-blue-500 text-white',
                    title: 'Preview Ready',
                    description: 'Sign in to save extracted content to your Knowledge Base.'
                });
            }
            setExtractedContents((prev)=>[
                    ...prev,
                    newContent
                ]);
            setExtractedLinks(((_responseData_structured = responseData.structured) === null || _responseData_structured === void 0 ? void 0 : _responseData_structured.links) || []);
            setExtractionUrl('');
        } catch (error) {
            setError(error instanceof Error ? error.message.replace(/^Error: /, '') : 'An unknown error occurred');
            setExtractionUrl('');
        } finally{
            setIsExtracting(false);
        }
    };
    const handleFileUpload = async (e)=>{
        const files = e.target.files;
        if (!files || files.length === 0) {
            setError('No files selected');
            return;
        }
        setIsExtracting(true);
        setError(null);
        const processedFiles = [];
        const errors = [];
        for (const file of Array.from(files)){
            try {
                var _file_name_split_pop;
                const maxSize = 10 * 1024 * 1024;
                if (file.size > maxSize) {
                    errors.push("Skipping ".concat(file.name, ": File exceeds 10MB size limit"));
                    continue;
                }
                const allowedTypes = [
                    'text/plain',
                    'text/markdown',
                    'application/json',
                    'application/pdf'
                ];
                const allowedExtensions = [
                    '.txt',
                    '.md',
                    '.json',
                    '.pdf'
                ];
                const fileExt = ((_file_name_split_pop = file.name.split('.').pop()) === null || _file_name_split_pop === void 0 ? void 0 : _file_name_split_pop.toLowerCase()) || '';
                if (!allowedTypes.some((t)=>file.type.includes(t.replace('*', ''))) && !allowedExtensions.includes(".".concat(fileExt))) {
                    errors.push("Skipping ".concat(file.name, ": Unsupported file type"));
                    continue;
                }
                if (file.type === 'application/pdf' || fileExt === 'pdf') {
                    const formData = new FormData();
                    formData.append('file', file);
                    const response = await fetch('/api/extract-file', {
                        method: 'POST',
                        body: formData,
                        signal: AbortSignal.timeout(30000)
                    });
                    const responseData = await response.json();
                    if (!response.ok) throw new Error(responseData.error || "Failed to extract content from ".concat(file.name));
                    const extractedText = (responseData.text || '').trim();
                    if (!extractedText) throw new Error("No readable content found in ".concat(file.name));
                    if (!responseData || typeof responseData !== 'object') {
                        throw new Error("Invalid response format from server for ".concat(file.name));
                    }
                    setExtractedContents((prev)=>{
                        var _responseData_structured, _responseData_structured1, _responseData_structured2, _responseData_structured3;
                        return [
                            ...prev,
                            {
                                url: file.name,
                                text: extractedText,
                                structured: {
                                    tabs: ((_responseData_structured = responseData.structured) === null || _responseData_structured === void 0 ? void 0 : _responseData_structured.tabs) || [],
                                    inputs: ((_responseData_structured1 = responseData.structured) === null || _responseData_structured1 === void 0 ? void 0 : _responseData_structured1.inputs) || [],
                                    buttons: ((_responseData_structured2 = responseData.structured) === null || _responseData_structured2 === void 0 ? void 0 : _responseData_structured2.buttons) || [],
                                    links: ((_responseData_structured3 = responseData.structured) === null || _responseData_structured3 === void 0 ? void 0 : _responseData_structured3.links) || []
                                }
                            }
                        ];
                    });
                    processedFiles.push(file.name);
                } else if (file.type.startsWith('text/') || [
                    '.txt',
                    '.md',
                    '.json'
                ].includes(".".concat(fileExt))) {
                    const text = await file.text();
                    if (!text.trim()) throw new Error("File ".concat(file.name, " is empty"));
                    setExtractedContents((prev)=>[
                            ...prev,
                            {
                                url: file.name,
                                text,
                                structured: {
                                    tabs: [],
                                    inputs: [],
                                    buttons: [],
                                    links: []
                                }
                            }
                        ]);
                    processedFiles.push(file.name);
                }
            } catch (error) {
                errors.push(error instanceof Error ? error.message.replace(/^Error: /, '') : "Failed to process ".concat(file.name));
            }
        }
        if (errors.length > 0) {
            setError(processedFiles.length > 0 ? "Processed ".concat(processedFiles.length, " file(s), but encountered ").concat(errors.length, " error(s). ").concat(errors.join(' ')) : "Failed to process files: ".concat(errors.join(' ')));
            setTimeout(()=>setError(null), 5000);
        } else if (processedFiles.length > 0) {
            setError("Successfully processed ".concat(processedFiles.length, " file(s)."));
            setTimeout(()=>setError(null), 3000);
        }
        setIsExtracting(false);
        if (e.target) e.target.value = '';
    };
    const removeLink = (index)=>{
        setExtractedLinks((prev)=>prev.filter((_, i)=>i !== index));
    };
    // Render Functions
    const renderHeader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-gray-200 p-4 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-black",
                    children: "Create New Agent"
                }, void 0, false, {
                    fileName: "[project]/app/create-agent/page.tsx",
                    lineNumber: 291,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "text-black hover:text-gray-700",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/create-agent/page.tsx",
                    lineNumber: 292,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/create-agent/page.tsx",
            lineNumber: 290,
            columnNumber: 5
        }, this);
    const handleSave = async ()=>{
        console.log("[handleSave] Starting agent save process...");
        try {
            // Check authentication
            if (!user) {
                console.error("[handleSave] User not authenticated");
                toast({
                    className: "bg-destructive text-destructive-foreground",
                    title: "Authentication Error",
                    description: "You must be logged in to save an agent"
                });
                return;
            }
            // Basic validation
            if (!(assistantName === null || assistantName === void 0 ? void 0 : assistantName.trim())) {
                console.error("[handleSave] Validation failed: Missing agent name");
                toast({
                    className: "bg-destructive text-destructive-foreground",
                    title: "Validation Error",
                    description: "Please provide a name for your agent"
                });
                return;
            }
            // Prepare form fields data
            const formFieldsData = formFields.map((field)=>({
                    id: field.id,
                    type: field.type,
                    label: field.label,
                    required: field.required,
                    value: field.value || ''
                }));
            console.log("[handleSave] Preparing agent payload:", {
                name: assistantName,
                welcomeMessage: welcomeMessage || "👋 Hi there! I'm ".concat(assistantName, ". How can I help you today?"),
                systemPrompt: systemPrompt || "You are a helpful AI assistant.",
                temperature,
                headerColor,
                accentColor,
                backgroundColor,
                profileImage: profileImage || undefined,
                collectUserInfo,
                formFields: formFieldsData
            });
            // If we already created an agent (e.g., during extraction), update it; otherwise create
            let finalAgentId;
            if (agentIdState) {
                await updateAgent({
                    id: agentIdState,
                    name: assistantName,
                    welcomeMessage: welcomeMessage || "👋 Hi there! I'm ".concat(assistantName, ". How can I help you today?"),
                    systemPrompt: systemPrompt || "You are a helpful AI assistant.",
                    temperature,
                    headerColor,
                    accentColor,
                    backgroundColor,
                    profileImage: profileImage || undefined,
                    collectUserInfo,
                    formFields: formFieldsData
                });
                finalAgentId = agentIdState;
                console.log("[handleSave] Agent updated successfully:", finalAgentId);
            } else {
                const createdId = await createAgent({
                    name: assistantName,
                    welcomeMessage: welcomeMessage || "👋 Hi there! I'm ".concat(assistantName, ". How can I help you today?"),
                    systemPrompt: systemPrompt || "You are a helpful AI assistant.",
                    temperature,
                    headerColor,
                    accentColor,
                    backgroundColor,
                    profileImage: profileImage || undefined,
                    collectUserInfo,
                    formFields: formFieldsData
                });
                finalAgentId = String(createdId);
                setAgentIdState(finalAgentId);
                console.log("[handleSave] Agent created successfully with ID:", finalAgentId);
            }
            // Show success message
            toast({
                className: "bg-green-500 text-white",
                title: "Success",
                description: "Agent created successfully"
            });
            // Redirect to the agent's page (updated or created)
            router.push("/agent/".concat(finalAgentId));
        } catch (error) {
            console.error("[handleSave] Error creating agent:", error);
            // Extract error message
            let errorMessage = "There was an error saving your agent. Please try again.";
            if (error instanceof Error) {
                errorMessage = error.message || errorMessage;
                console.error("[handleSave] Error details:", {
                    name: error.name,
                    message: error.message,
                    stack: error.stack
                });
            }
            // Show error message to user
            toast({
                className: "bg-destructive text-destructive-foreground",
                title: "Error creating agent",
                description: errorMessage
            });
        }
    };
    const renderFooter = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-gray-200 p-4 flex justify-end space-x-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    variant: "outline",
                    onClick: onClose,
                    children: "Cancel"
                }, void 0, false, {
                    fileName: "[project]/app/create-agent/page.tsx",
                    lineNumber: 419,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    onClick: handleSave,
                    children: "Save Agent"
                }, void 0, false, {
                    fileName: "[project]/app/create-agent/page.tsx",
                    lineNumber: 420,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/create-agent/page.tsx",
            lineNumber: 418,
            columnNumber: 7
        }, this);
    };
    // Ensure an agent exists and return its ID (no redirect). Used by Plugins tab when clicking HTML & CSS card.
    const ensureAgentSaved = async ()=>{
        if (agentIdState) return agentIdState;
        if (!user) {
            toast({
                className: "bg-destructive text-destructive-foreground",
                title: "Authentication Error",
                description: "You must be logged in to save an agent"
            });
            throw new Error("Not authenticated");
        }
        if (!(assistantName === null || assistantName === void 0 ? void 0 : assistantName.trim())) {
            toast({
                className: "bg-destructive text-destructive-foreground",
                title: "Validation Error",
                description: "Please provide a name for your agent"
            });
            throw new Error("Missing agent name");
        }
        const formFieldsData = formFields.map((field)=>({
                id: field.id,
                type: field.type,
                label: field.label,
                required: field.required,
                value: field.value || ''
            }));
        const newId = await createAgent({
            name: assistantName,
            welcomeMessage: welcomeMessage || "👋 Hi there! I'm ".concat(assistantName, ". How can I help you today?"),
            systemPrompt: systemPrompt || "You are a helpful AI assistant.",
            temperature,
            headerColor,
            accentColor,
            backgroundColor,
            profileImage: profileImage || undefined,
            collectUserInfo,
            formFields: formFieldsData
        });
        setAgentIdState(String(newId));
        toast({
            className: "bg-green-500 text-white",
            title: "Saved",
            description: "Agent saved for embedding."
        });
        return String(newId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-white flex flex-col h-screen w-screen",
        children: [
            renderHeader(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-2/3 overflow-y-auto p-6 border-r border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tabs, {
                                value: activeTab,
                                onValueChange: setActiveTab,
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsList, {
                                        className: "grid grid-cols-4 mb-6 h-12 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                value: "configuration",
                                                className: "text-black data-[state=active]:text-black text-base h-10 flex items-center justify-center px-20",
                                                children: "Configuration"
                                            }, void 0, false, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 478,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                value: "fine-tuning",
                                                className: "text-black data-[state=active]:text-black text-base h-10 flex items-center justify-center px-8",
                                                children: "Fine-tuning"
                                            }, void 0, false, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 481,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                value: "style",
                                                className: "text-black data-[state=active]:text-black text-base h-10 flex items-center justify-center px-8",
                                                children: "Style"
                                            }, void 0, false, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 484,
                                                columnNumber: 3
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsTrigger, {
                                                value: "plugins",
                                                className: "text-black data-[state=active]:text-black text-base h-10 flex items-center justify-center px-8",
                                                children: "Plugins"
                                            }, void 0, false, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 487,
                                                columnNumber: 3
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfigurationTab, {
                                        assistantName: assistantName,
                                        setAssistantName: setAssistantName,
                                        welcomeMessage: welcomeMessage,
                                        setWelcomeMessage: setWelcomeMessage,
                                        collectUserInfo: collectUserInfo,
                                        setCollectUserInfo: setCollectUserInfo,
                                        systemPrompt: systemPrompt,
                                        setSystemPrompt: setSystemPrompt,
                                        temperature: temperature,
                                        setTemperature: setTemperature,
                                        formFields: formFields,
                                        setFormFields: setFormFields
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 492,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FineTuningTab, {
                                        extractionUrl: extractionUrl,
                                        setExtractionUrl: setExtractionUrl,
                                        isExtracting: isExtracting,
                                        extractedContents: extractedContents,
                                        setExtractedContents: setExtractedContents,
                                        extractedLinks: extractedLinks,
                                        selectedContentIndex: selectedContentIndex,
                                        setSelectedContentIndex: setSelectedContentIndex,
                                        error: error,
                                        handleExtract: handleExtract,
                                        handleFileUpload: handleFileUpload,
                                        removeLink: removeLink
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 506,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyleTab, {
                                        profileImage: profileImage,
                                        setProfileImage: setProfileImage,
                                        initials: initials,
                                        setInitials: setInitials,
                                        headerColor: headerColor,
                                        setHeaderColor: setHeaderColor,
                                        accentColor: accentColor,
                                        setAccentColor: setAccentColor,
                                        backgroundColor: backgroundColor,
                                        setBackgroundColor: setBackgroundColor,
                                        isTopColorPopoverOpen: isTopColorPopoverOpen,
                                        setIsTopColorPopoverOpen: setIsTopColorPopoverOpen,
                                        isAccentColorPopoverOpen: isAccentColorPopoverOpen,
                                        setIsAccentColorPopoverOpen: setIsAccentColorPopoverOpen,
                                        isBackgroundColorPopoverOpen: isBackgroundColorPopoverOpen,
                                        setIsBackgroundColorPopoverOpen: setIsBackgroundColorPopoverOpen,
                                        fileInputRef: fileInputRef,
                                        isDragging: isDragging,
                                        setIsDragging: setIsDragging,
                                        position: position,
                                        setPosition: setPosition,
                                        startPos: startPos,
                                        setStartPos: setStartPos,
                                        scale: scale,
                                        setScale: setScale,
                                        colorPalette: colorPalette
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 520,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PluginsTab, {
                                        plugins: pluginLogos,
                                        getAgentId: ensureAgentSaved
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 549,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 476,
                                columnNumber: 11
                            }, this),
                            showError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Alert, {
                                variant: "destructive",
                                className: "mt-6 bg-amber-50 border-amber-200 text-amber-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDescription, {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-2",
                                                children: "⚠️"
                                            }, void 0, false, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium",
                                                        children: "Extraction Service Unavailable"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/create-agent/page.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "The document extraction service is not running."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/create-agent/page.tsx",
                                                        lineNumber: 557,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 555,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 553,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                        variant: "outline",
                                        className: "mt-2 border-amber-300 text-amber-800 hover:bg-amber-100 flex items-center",
                                        onClick: ()=>setShowError(false),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "h-4 w-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 565,
                                                columnNumber: 17
                                            }, this),
                                            "Retry Connection"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 560,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 552,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 475,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/3 p-4 bg-gray-50 flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-h-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full border rounded-lg overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full w-full flex items-center justify-center p-4",
                                    children: !showChat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleChatForm, {
                                        formFields: formFields.map((field)=>({
                                                id: field.id,
                                                label: field.label,
                                                type: field.type,
                                                required: field.required,
                                                value: field.value || ''
                                            })),
                                        onFormSubmitAction: async (formData)=>{
                                            console.log('Form submitted with data:', formData);
                                            setShowChat(true);
                                            return; // Explicitly return void
                                        },
                                        _assistantName: assistantName,
                                        _welcomeMessage: welcomeMessage || "👋 Thanks for your information! How can I help you today?",
                                        _headerColor: headerColor,
                                        _accentColor: accentColor,
                                        _backgroundColor: backgroundColor,
                                        _profileImage: profileImage || '',
                                        className: "w-full h-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 576,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatInterface, {
                                        assistantName: assistantName,
                                        profileImage: profileImage || undefined,
                                        welcomeMessage: welcomeMessage || "👋 Hi there! I&apos;m ".concat(assistantName, ". How can I help you today?"),
                                        headerColor: headerColor,
                                        accentColor: accentColor,
                                        onSendMessage: async (message)=>{
                                            // In a real app, you would send this to your API
                                            console.log('Message sent:', message);
                                            // Simulate a response
                                            setTimeout(()=>{
                                                setShowChat((prev)=>!prev); // Toggle chat to force re-render with new messages
                                            }, 1000);
                                            return; // Explicitly return void
                                        },
                                        onClose: onClose,
                                        className: "w-full h-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 598,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 574,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 573,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 572,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 571,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 474,
                columnNumber: 7
            }, this),
            renderFooter()
        ]
    }, void 0, true, {
        fileName: "[project]/app/create-agent/page.tsx",
        lineNumber: 472,
        columnNumber: 5
    }, this);
}
_s(CreateAgentModal, "JdGJJvknSlW8kKk1dHCt/6UVKCg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"],
        useToast
    ];
});
_c = CreateAgentModal;
const ConfigurationTab = (param)=>{
    let { assistantName, setAssistantName, welcomeMessage, setWelcomeMessage, collectUserInfo, setCollectUserInfo, systemPrompt, setSystemPrompt, temperature, setTemperature, formFields, setFormFields } = param;
    const toggleCollectUserInfo = ()=>{
        setCollectUserInfo(!collectUserInfo);
        if (collectUserInfo) setFormFields([]);
    };
    const addField = (type)=>{
        const newField = {
            id: "field-".concat(Date.now()),
            type,
            label: type === 'name' ? 'Name' : type === 'email' ? 'Email' : type === 'phone' ? 'Phone' : 'Field',
            required: true
        };
        setFormFields([
            ...formFields,
            newField
        ]);
    };
    const toggleRequired = (id)=>{
        setFormFields(formFields.map((field)=>field.id === id ? {
                ...field,
                required: !field.required
            } : field));
    };
    const toggleEditLabel = function(id) {
        let isAnswer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        setFormFields(formFields.map((field)=>({
                ...field,
                isEditing: field.id === id ? !field.isEditing : false,
                isEditingAnswer: field.id === id && isAnswer ? !field.isEditingAnswer : false
            })));
    };
    const updateFieldLabel = (id, newLabel)=>{
        if (newLabel.trim() === '') return;
        setFormFields(formFields.map((field)=>field.id === id ? {
                ...field,
                label: newLabel.trim(),
                isEditing: false,
                isEditingAnswer: false
            } : field));
    };
    const removeField = (id)=>{
        setFormFields(formFields.filter((field)=>field.id !== id));
    };
    const clearAllFields = ()=>{
        setFormFields([]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
        value: "configuration",
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-2 text-black",
                        children: "Name"
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 713,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                        placeholder: "AI Assistant",
                        value: assistantName,
                        onChange: (e)=>setAssistantName(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 714,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 712,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-2 text-black",
                        children: "Select Language Model"
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 717,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full p-2 border border-gray-300 rounded-md appearance-none pr-10 text-black",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Llama 3.1 Nemetron Nano 8B (Free)"
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 720,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 719,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m6 9 6 6 6-6"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 724,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 723,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 722,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 718,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 716,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-black",
                                children: [
                                    "Temperature: ",
                                    temperature
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 731,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-black",
                                children: "Balanced"
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 732,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 730,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slider, {
                        value: [
                            temperature * 100
                        ],
                        max: 100,
                        step: 1,
                        onValueChange: (param)=>{
                            let [value] = param;
                            return setTemperature(value / 100);
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 734,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 729,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-2 text-black",
                        children: "System Prompt"
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 737,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        placeholder: "You are a helpful AI assistant.",
                        value: systemPrompt,
                        onChange: (e)=>setSystemPrompt(e.target.value),
                        className: "min-h-[100px]"
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 738,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-black mt-1",
                        children: "This prompt defines your assistant's personality and capabilities."
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 744,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 736,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-2 text-black",
                        children: "Welcome Message"
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 747,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Textarea, {
                        placeholder: "👋 Hi, I'm an AI Assistant! I can help with information.",
                        value: welcomeMessage,
                        onChange: (e)=>setWelcomeMessage(e.target.value),
                        className: "min-h-[80px]"
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 748,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-black mt-1",
                        children: "This is the first message users will see when they start a chat."
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 754,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 746,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-black",
                                        children: "Collect User Information"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 759,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-black",
                                        children: "Enable a form to collect user info before chat"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 760,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 758,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Switch, {
                                checked: collectUserInfo,
                                onCheckedChange: toggleCollectUserInfo
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 762,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 757,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    collectUserInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-lg p-4 bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium text-black mb-3",
                                        children: "Add Field Templates"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 767,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ()=>addField('name'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                        className: "mr-1 h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/create-agent/page.tsx",
                                                        lineNumber: 770,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Name Field"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 769,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ()=>addField('email'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        className: "mr-1 h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/create-agent/page.tsx",
                                                        lineNumber: 773,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Email Field"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 772,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ()=>addField('phone'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "mr-1 h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/create-agent/page.tsx",
                                                        lineNumber: 776,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Phone Number"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 775,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                variant: "outline",
                                                size: "sm",
                                                onClick: ()=>addField('custom'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "mr-1 h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/create-agent/page.tsx",
                                                        lineNumber: 779,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Custom Field"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 778,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 768,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 766,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-black",
                                                children: "Active Fields"
                                            }, void 0, false, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 785,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            formFields.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                                variant: "ghost",
                                                size: "sm",
                                                className: "text-red-600 hover:text-red-700",
                                                onClick: clearAllFields,
                                                children: "Clear All"
                                            }, void 0, false, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 787,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 784,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    formFields.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: formFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormFieldItem, {
                                                field: field,
                                                onToggleEdit: toggleEditLabel,
                                                onUpdateLabel: updateFieldLabel,
                                                onToggleRequired: toggleRequired,
                                                onRemove: removeField
                                            }, field.id, false, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 795,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 793,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-black",
                                            children: "No fields added. Use the templates above to add fields."
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 807,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 806,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 783,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 765,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 756,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/create-agent/page.tsx",
        lineNumber: 711,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = ConfigurationTab;
const FormFieldItem = (param)=>{
    let { field, onToggleEdit, onUpdateLabel, onToggleRequired, onRemove } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative p-4 border rounded-lg bg-white hover:bg-gray-50 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full group editable-field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-1",
                        children: [
                            field.isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "text-sm border rounded px-2 py-1 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                        defaultValue: field.label,
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter') onUpdateLabel(field.id, e.currentTarget.value);
                                            else if (e.key === 'Escape') onToggleEdit(field.id);
                                        },
                                        onBlur: (e)=>onUpdateLabel(field.id, e.target.value),
                                        autoFocus: true,
                                        onClick: (e)=>e.stopPropagation()
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 841,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: field.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 853,
                                            columnNumber: 72
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 853,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 840,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group flex items-center cursor-pointer",
                                onClick: ()=>onToggleEdit(field.id),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onToggleEdit(field.id, false);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium text-gray-900 group-hover:bg-gray-100 px-1 -mx-1 rounded",
                                            children: [
                                                field.label,
                                                " ",
                                                field.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 859,
                                                    columnNumber: 50
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 858,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                            className: "ml-2 h-3 w-3 text-gray-400 group-hover:text-gray-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 861,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 857,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 856,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "inline-flex items-center cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500 mr-2",
                                        children: field.required ? 'Required' : 'Optional'
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 866,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                className: "sr-only",
                                                checked: field.required,
                                                onChange: ()=>onToggleRequired(field.id)
                                            }, void 0, false, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 868,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-4 rounded-full transition-colors ".concat(field.required ? 'bg-blue-500' : 'bg-gray-300'),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ".concat(field.required ? 'translate-x-4' : '')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 870,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 869,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 867,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 865,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 838,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500",
                                children: "answer "
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 876,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            field.isEditingAnswer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "text-sm text-gray-900 border-b border-dashed border-blue-500 bg-transparent focus:outline-none focus:border-blue-600 px-1 -ml-1",
                                value: field.label,
                                onClick: (e)=>e.stopPropagation(),
                                autoFocus: true,
                                onKeyDown: (e)=>{
                                    if (e.key === 'Enter' || e.key === 'Escape') onToggleEdit(field.id);
                                },
                                onBlur: ()=>onToggleEdit(field.id)
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 878,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-500 hover:bg-gray-100 px-1 -mx-1 rounded cursor-text",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onToggleEdit(field.id, true);
                                },
                                children: field.label
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 890,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 875,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 837,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 pt-3 border-t",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            className: "h-8 px-3 text-xs text-gray-600 hover:bg-gray-100",
                            onClick: (e)=>{
                                e.stopPropagation();
                                onToggleEdit(field.id);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                    className: "h-3 w-3 mr-1 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 899,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: field.isEditing ? 'Cancel' : 'Rename'
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 900,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 898,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                            variant: "outline",
                            size: "sm",
                            className: "h-8 text-xs text-red-500 hover:text-red-600",
                            onClick: ()=>onRemove(field.id),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "h-3 w-3 mr-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 903,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Delete"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 902,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/create-agent/page.tsx",
                    lineNumber: 897,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 896,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/create-agent/page.tsx",
        lineNumber: 836,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = FormFieldItem;
const FineTuningTab = (param)=>{
    let { extractionUrl, setExtractionUrl, isExtracting, extractedContents, setExtractedContents, extractedLinks, selectedContentIndex, setSelectedContentIndex, error, handleExtract, handleFileUpload, removeLink } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
        value: "fine-tuning",
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-gray-50 rounded-lg mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-medium text-black",
                        children: "Fine-tuning Data"
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 933,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-black",
                        children: "Upload files or extract content from URLs to fine-tune your agent's knowledge base."
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 934,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 932,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "leading-none font-semibold flex items-center text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "h-5 w-5 mr-2 text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 939,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Extract Links & Content"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 938,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-black",
                                children: "Extract links and content from websites to use as training data"
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 942,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 937,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                                            placeholder: "Enter URL to extract links",
                                            value: extractionUrl,
                                            onChange: (e)=>setExtractionUrl(e.target.value),
                                            disabled: isExtracting
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 947,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 whitespace-nowrap",
                                            onClick: handleExtract,
                                            disabled: isExtracting,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 960,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                "Extract Content"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 955,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 946,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-red-500 text-sm",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 964,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-medium mb-2 text-black",
                                            children: [
                                                "Extracted Links (",
                                                extractedLinks.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 966,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        extractedLinks.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 max-h-40 overflow-y-auto",
                                            children: extractedLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between bg-gray-50 p-2 rounded-md",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-sm truncate",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                    className: "h-4 w-4 mr-2 text-black flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                                    lineNumber: 972,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate text-black",
                                                                    children: link.text || link.url
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                                    lineNumber: 973,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/create-agent/page.tsx",
                                                            lineNumber: 971,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 ml-2 flex-shrink-0",
                                                            onClick: ()=>removeLink(index),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "h-4 w-4 text-black"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/create-agent/page.tsx",
                                                                lineNumber: 979,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create-agent/page.tsx",
                                                            lineNumber: 975,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 970,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 968,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-4 text-black text-sm",
                                            children: "No links extracted yet"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 985,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        extractedContents.filter((c)=>c.url.startsWith('http')).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-black mb-2",
                                                    children: [
                                                        "URL Extracted Content (",
                                                        extractedContents.filter((c)=>c.url.startsWith('http')).length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 989,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExtractedContentList, {
                                                    contents: extractedContents.filter((c)=>c.url.startsWith('http')),
                                                    onRemove: (index)=>{
                                                        const newContents = extractedContents.filter((_, i)=>i !== index);
                                                        setExtractedContents(newContents);
                                                        if (selectedContentIndex === index) setSelectedContentIndex(null);
                                                        else if (selectedContentIndex !== null && selectedContentIndex > index) setSelectedContentIndex(selectedContentIndex - 1);
                                                    },
                                                    selectedIndex: selectedContentIndex,
                                                    onSelect: setSelectedContentIndex,
                                                    isUrl: true
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 990,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 988,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 965,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 945,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 944,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 936,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-2 text-black",
                        children: "Upload Documents"
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1009,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-dashed rounded-lg p-6 text-center transition-colors ".concat(isExtracting ? 'border-blue-300 bg-blue-50' : 'border-gray-300 hover:border-blue-400 bg-white'),
                                onDragOver: (e)=>{
                                    e.preventDefault();
                                    e.currentTarget.classList.add('border-blue-500', 'bg-blue-50');
                                },
                                onDragLeave: (e)=>{
                                    e.preventDefault();
                                    e.currentTarget.classList.remove('border-blue-500', 'bg-blue-50');
                                },
                                onDrop: (e)=>{
                                    e.preventDefault();
                                    e.currentTarget.classList.remove('border-blue-500', 'bg-blue-50');
                                    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                                        handleFileUpload({
                                            target: {
                                                files: e.dataTransfer.files
                                            }
                                        });
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        multiple: true,
                                        onChange: handleFileUpload,
                                        className: "hidden",
                                        id: "file-upload",
                                        disabled: isExtracting,
                                        accept: ".txt,.md,.json,.pdf"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1023,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "file-upload",
                                        className: "cursor-pointer flex flex-col items-center ".concat(isExtracting ? 'text-blue-500' : 'text-blue-500 hover:text-blue-700'),
                                        children: isExtracting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                    className: "h-6 w-6 mx-auto mb-2 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1038,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-black",
                                                    children: "Processing files..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1039,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-600 mt-1",
                                                    children: "This may take a moment for PDFs"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1040,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    className: "h-6 w-6 mx-auto mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1044,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-black",
                                                    children: "Click to upload or drag and drop"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1045,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-600 mt-1",
                                                    children: "Supported formats: .txt, .md, .json, .pdf"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1046,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500 mt-1",
                                                    children: "(PDF text extraction is experimental)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1047,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1032,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1011,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            extractedContents.filter((c)=>!c.url.startsWith('http')).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium text-black mb-2",
                                        children: [
                                            "Extracted Documents (",
                                            extractedContents.filter((c)=>!c.url.startsWith('http')).length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1054,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExtractedContentList, {
                                        contents: extractedContents.filter((c)=>!c.url.startsWith('http')),
                                        onRemove: (index)=>{
                                            const actualIndex = extractedContents.findIndex((c)=>!c.url.startsWith('http') && extractedContents.filter((d)=>!d.url.startsWith('http')).indexOf(c) === index);
                                            const newContents = extractedContents.filter((_, i)=>i !== actualIndex);
                                            setExtractedContents(newContents);
                                            if (selectedContentIndex === actualIndex) setSelectedContentIndex(null);
                                            else if (selectedContentIndex !== null && selectedContentIndex > actualIndex) setSelectedContentIndex(selectedContentIndex - 1);
                                        },
                                        selectedIndex: selectedContentIndex,
                                        onSelect: setSelectedContentIndex,
                                        isUrl: false
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1055,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1053,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            extractedContents.filter((c)=>!c.url.startsWith('http')).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-center py-4 text-black text-sm border border-dashed rounded-md bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "No documents extracted yet"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1072,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "Upload files to extract their content"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1073,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1071,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 text-sm text-red-600",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1076,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1010,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 1008,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/create-agent/page.tsx",
        lineNumber: 931,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = FineTuningTab;
const ExtractedContentList = (param)=>{
    let { contents, onRemove, selectedIndex, onSelect, isUrl } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: contents.map((doc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border rounded-md overflow-hidden shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center p-3 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors",
                        onClick: ()=>onSelect(index),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center min-w-0",
                                children: [
                                    isUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "h-4 w-4 mr-2 text-blue-500 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1102,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "h-4 w-4 mr-2 text-blue-500 flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1104,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium truncate",
                                        title: doc.url,
                                        children: doc.url
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1106,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 text-xs text-gray-500 whitespace-nowrap",
                                        children: [
                                            "(",
                                            doc.text.length.toLocaleString(),
                                            " chars)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1107,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1100,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            navigator.clipboard.writeText(doc.text);
                                        },
                                        className: "p-1 text-gray-500 hover:text-blue-500",
                                        title: "Copy text",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1115,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1110,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            onRemove(index);
                                        },
                                        className: "p-1 text-gray-500 hover:text-red-500 ml-1",
                                        title: "Remove",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1122,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1117,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: "h-4 w-4 ml-1 text-gray-400 transition-transform ".concat(selectedIndex === index ? 'transform rotate-180' : '')
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1124,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1109,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1096,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    selectedIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-white border-t",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "text-xs whitespace-pre-wrap overflow-auto max-h-60",
                            children: doc.text
                        }, void 0, false, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 1129,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1128,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, doc.url, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 1095,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/app/create-agent/page.tsx",
        lineNumber: 1093,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = ExtractedContentList;
const StyleTab = (param)=>{
    let { profileImage, setProfileImage, initials, setInitials, headerColor, setHeaderColor, accentColor, setAccentColor, backgroundColor, setBackgroundColor, isTopColorPopoverOpen, setIsTopColorPopoverOpen, isAccentColorPopoverOpen, setIsAccentColorPopoverOpen, isBackgroundColorPopoverOpen, setIsBackgroundColorPopoverOpen, fileInputRef, isDragging, setIsDragging, position, setPosition, startPos, setStartPos, scale, setScale, colorPalette } = param;
    const handleImageUpload = async (e)=>{
        var _e_target_files;
        console.log('handleImageUpload triggered');
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (!file) {
            console.error('No file selected');
            return;
        }
        console.log('Selected file:', {
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified
        });
        // Reset the file input to allow re-uploading the same file
        if (e.target) {
            e.target.value = '';
        }
        // Validate file type
        if (!file.type.startsWith('image/')) {
            console.error('Invalid file type:', file.type);
            alert('Please upload a valid image file (JPEG, PNG, etc.)');
            return;
        }
        // Validate file size (2MB max)
        if (file.size > 2 * 1024 * 1024) {
            console.error('File too large:', file.size);
            alert('Image size should be less than 2MB');
            return;
        }
        // Read the file
        const reader = new FileReader();
        reader.onloadstart = ()=>{
            console.log('Starting file read...');
        };
        reader.onload = (event)=>{
            var _event_target;
            if ((_event_target = event.target) === null || _event_target === void 0 ? void 0 : _event_target.result) {
                const result = event.target.result;
                console.log('File read successfully, setting profile image...', {
                    resultLength: result.length,
                    resultPrefix: result.substring(0, 50) + '...'
                });
                setProfileImage(result);
                setPosition({
                    x: 0,
                    y: 0
                });
                setScale(1);
                // Log the state after setting
                setTimeout(()=>{
                    console.log('Profile image state should be updated now');
                }, 100);
            } else {
                console.error('Failed to read file - no result');
                alert('Failed to process the image. Please try again.');
            }
        };
        reader.onerror = (error)=>{
            console.error('Error reading file:', error);
            console.error('FileReader error details:', {
                error: reader.error,
                readyState: reader.readyState
            });
            alert('Error reading the file. Please try again.');
        };
        reader.onabort = ()=>{
            console.log('File reading was aborted');
        };
        try {
            console.log('Starting to read file as data URL...');
            reader.readAsDataURL(file);
        } catch (error) {
            console.error('Error in file reader:', error);
            alert('An error occurred while processing the image.');
        }
    };
    const handleMouseDown = (e)=>{
        e.preventDefault();
        setIsDragging(true);
        setStartPos({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };
    const handleMouseMove = (e)=>{
        if (!isDragging) return;
        e.preventDefault();
        setPosition({
            x: e.clientX - startPos.x,
            y: e.clientY - startPos.y
        });
    };
    const handleMouseUp = ()=>setIsDragging(false);
    const handleWheel = (e)=>{
        e.preventDefault();
        setScale(Math.min(Math.max(0.5, scale + (e.deltaY > 0 ? -0.1 : 0.1)), 3));
    };
    const handleInitialsChange = (e)=>{
        setInitials(e.target.value.slice(0, 2).toUpperCase() || 'AA');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
        value: "style",
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium mb-2 text-black",
                        children: "Agent Avatar"
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1283,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarPreview, {
                        profileImage: profileImage,
                        headerColor: headerColor,
                        position: position,
                        scale: scale,
                        isDragging: isDragging,
                        onMouseDown: handleMouseDown,
                        onMouseMove: handleMouseMove,
                        onMouseUp: handleMouseUp,
                        onWheel: handleWheel,
                        onUploadClick: ()=>{
                            var _fileInputRef_current;
                            return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1284,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                variant: "outline",
                                className: "flex items-center text-black mb-2",
                                onClick: ()=>{
                                    var _fileInputRef_current;
                                    return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1298,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    profileImage ? 'Change Photo' : 'Upload Photo'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1297,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                ref: fileInputRef,
                                onChange: handleImageUpload,
                                accept: "image/*",
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1301,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            !profileImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Enter initials (e.g., AA)",
                                        maxLength: 2,
                                        onChange: handleInitialsChange,
                                        value: initials,
                                        className: "text-xs p-1 border rounded w-20"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1304,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mt-1",
                                        children: "Or enter initials"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1312,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1303,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-black mt-1",
                                children: "Recommended: PNG format, 512x512 pixels, max 2MB"
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1315,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1296,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 1282,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium mb-2 text-black",
                            children: "Text Style"
                        }, void 0, false, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 1320,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-black",
                                            children: "Font Family"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1323,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "p-2 border border-gray-300 rounded-md text-black",
                                            defaultValue: "Roboto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Roboto",
                                                    children: "Roboto"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1325,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Inter",
                                                    children: "Inter"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1326,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Open Sans",
                                                    children: "Open Sans"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1327,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "System Default",
                                                    children: "System Default"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1328,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1324,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1322,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-black",
                                            children: "Size"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1332,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "p-2 border border-gray-300 rounded-md text-black",
                                            defaultValue: "Medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Small",
                                                    children: "Small"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1334,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Medium",
                                                    children: "Medium"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1335,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Large",
                                                    children: "Large"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1336,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1333,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1331,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-black",
                                            children: "Alignment"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1340,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "p-2 border border-gray-300 rounded-md text-black",
                                            defaultValue: "Left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Left",
                                                    children: "Left"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1342,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Center",
                                                    children: "Center"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1343,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Right",
                                                    children: "Right"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1344,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1341,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1339,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 1321,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/create-agent/page.tsx",
                    lineNumber: 1319,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 1318,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg border border-gray-200 shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900",
                                    children: "Chatbot Appearance"
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1353,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: "Customize the appearance of your chatbot to match your brand or website design."
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1354,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 1352,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPicker, {
                                    label: "Header Color",
                                    color: headerColor,
                                    onColorChange: setHeaderColor,
                                    isOpen: isTopColorPopoverOpen,
                                    onOpenChange: setIsTopColorPopoverOpen,
                                    colorPalette: colorPalette
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1357,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPicker, {
                                    label: "Accent Color",
                                    color: accentColor,
                                    onColorChange: setAccentColor,
                                    isOpen: isAccentColorPopoverOpen,
                                    onOpenChange: setIsAccentColorPopoverOpen,
                                    colorPalette: colorPalette
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1365,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorPicker, {
                                    label: "Background Color",
                                    color: backgroundColor,
                                    onColorChange: setBackgroundColor,
                                    isOpen: isBackgroundColorPopoverOpen,
                                    onOpenChange: setIsBackgroundColorPopoverOpen,
                                    colorPalette: colorPalette.filter((c)=>c !== '#000000')
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1373,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 1356,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/create-agent/page.tsx",
                    lineNumber: 1351,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 1350,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/create-agent/page.tsx",
        lineNumber: 1281,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = StyleTab;
const AvatarPreview = (param)=>{
    let { profileImage, headerColor, position, scale, isDragging, onMouseDown, onMouseMove, onMouseUp, onWheel, onUploadClick } = param;
    // Debug log to check the profileImage prop
    console.log('AvatarPreview - profileImage:', profileImage ? 'Image exists' : 'No image');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mb-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-48 w-48 rounded-full flex items-center justify-center overflow-hidden relative group bg-gray-100 border-2 border-gray-200",
                onMouseDown: onMouseDown,
                onMouseMove: onMouseMove,
                onMouseUp: onMouseUp,
                onMouseLeave: onMouseUp,
                onWheel: onWheel,
                style: {
                    cursor: isDragging ? 'grabbing' : 'grab',
                    touchAction: 'none',
                    backgroundColor: profileImage ? 'transparent' : headerColor || '#3B82F6'
                },
                children: [
                    profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center justify-center",
                        style: {
                            transform: "translate(".concat(position.x, "px, ").concat(position.y, "px) scale(").concat(scale, ")"),
                            transformOrigin: 'center center',
                            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '50%'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: profileImage,
                                alt: "Profile preview",
                                fill: true,
                                sizes: "100vw",
                                className: "object-cover object-center block",
                                draggable: false,
                                onError: (e)=>{
                                    console.error('Error loading image:', e);
                                    const target = e.target;
                                    target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1439,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 1438,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1425,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white font-bold text-6xl",
                            children: "AA"
                        }, void 0, false, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 1456,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1455,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-200 cursor-pointer",
                        onClick: (e)=>{
                            e.stopPropagation();
                            console.log('Upload click handler called');
                            onUploadClick();
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "opacity-0 group-hover:opacity-100 transition-opacity text-center p-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "h-8 w-8 text-white mx-auto mb-1"
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1468,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded",
                                    children: profileImage ? 'Change Photo' : 'Upload Photo'
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1469,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                profileImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-xs mt-2 bg-black bg-opacity-50 px-2 py-1 rounded",
                                    children: "Drag to move • Scroll to zoom"
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1473,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 1467,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1459,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 1411,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/create-agent/page.tsx",
            lineNumber: 1410,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/create-agent/page.tsx",
        lineNumber: 1409,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c6 = AvatarPreview;
const ColorSwatch = (param)=>{
    let { color, onClick, isSelected = false } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "w-6 h-6 rounded border-2 ".concat(isSelected ? 'border-blue-500' : 'border-transparent'),
        style: {
            backgroundColor: color
        },
        onClick: onClick,
        "aria-label": "Select ".concat(color, " color")
    }, void 0, false, {
        fileName: "[project]/app/create-agent/page.tsx",
        lineNumber: 1501,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c7 = ColorSwatch;
const ColorPicker = (param)=>{
    let { label, color, onColorChange, isOpen, onOpenChange, colorPalette } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-700 mb-2",
                children: [
                    label,
                    label === 'Header Color' && ' (Top bar)',
                    label === 'Accent Color' && ' (Buttons, links)',
                    label === 'Background Color' && ' (Chat area)'
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 1515,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Popover, {
                        open: isOpen,
                        onOpenChange: onOpenChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PopoverTrigger, {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                    variant: "outline",
                                    className: "w-10 h-10 p-0 rounded-full overflow-hidden border-2 border-gray-300",
                                    onClick: ()=>onOpenChange(!isOpen),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full",
                                        style: {
                                            backgroundColor: color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1529,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1524,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1523,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PopoverContent, {
                                className: "w-48 p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-5 gap-2",
                                        children: colorPalette.map((paletteColor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorSwatch, {
                                                color: paletteColor,
                                                onClick: ()=>{
                                                    onColorChange(paletteColor);
                                                    onOpenChange(false);
                                                },
                                                isSelected: color === paletteColor
                                            }, paletteColor, false, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 1538,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1536,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 pt-3 border-t border-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-8 w-8 rounded border flex-shrink-0",
                                                    style: {
                                                        backgroundColor: color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1551,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                                                    id: "".concat(label.toLowerCase().replace(' ', '-'), "-input"),
                                                    value: color,
                                                    onChange: (e)=>onColorChange(e.target.value),
                                                    className: "font-mono text-sm h-8",
                                                    placeholder: "#rrggbb"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1552,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1550,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1549,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1535,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1522,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Input, {
                            id: "".concat(label.toLowerCase().replace(' ', '-'), "-input"),
                            value: color,
                            onChange: (e)=>onColorChange(e.target.value),
                            className: "font-mono text-sm h-10",
                            placeholder: "#rrggbb"
                        }, void 0, false, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 1564,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1563,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 1521,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/create-agent/page.tsx",
        lineNumber: 1514,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c8 = ColorPicker;
const PluginsTab = (param)=>{
    let { plugins, getAgentId } = param;
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [showEmbed, setShowEmbed] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [snippet, setSnippet] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('<script src="/widget.js" data-bot-id="USER_BOT_ID"></script>');
    const [isEmbedLoading, setIsEmbedLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [embedError, setEmbedError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const handleClick = async (pluginId)=>{
        if (pluginId === "wordpress") {
            router.push('/integrations/wordpress');
            return;
        }
        if (pluginId === "html-css") {
            setEmbedError(null);
            setShowEmbed(true);
            setIsEmbedLoading(true);
            try {
                const id = await getAgentId();
                const origin = ("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable";
                setSnippet('<script src="'.concat(origin, '/widget.js" data-bot-id="').concat(id, '"></script>'));
            } catch (err) {
                console.error('Failed to get agent id for embed', err);
                setEmbedError('Could not save agent. Please fix required fields or sign in, then try again.');
            } finally{
                setIsEmbedLoading(false);
            }
        }
    };
    const copySnippet = async ()=>{
        try {
            await navigator.clipboard.writeText(snippet);
        } catch (e) {
            console.error('Failed to copy snippet', e);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
        value: "plugins",
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-gray-50 rounded-lg mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-medium text-black",
                        children: "Available Plugins"
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1622,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-black",
                        children: "Connect your chatbot with popular platforms and services to extend its functionality."
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1623,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 1621,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: plugins.map((plugin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        onClick: ()=>handleClick(plugin.id),
                        className: plugin.id === 'html-css' || plugin.id === 'wordpress' ? 'cursor-pointer' : undefined,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardContent, {
                            className: "p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-10 w-10 rounded bg-white border flex items-center justify-center mr-3 p-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-10 w-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: plugin.logoUrl || "/placeholder.svg",
                                                    alt: "".concat(plugin.name, " logo"),
                                                    fill: true,
                                                    sizes: "40px",
                                                    className: "object-contain",
                                                    onError: (e)=>{
                                                        const target = e.target;
                                                        target.style.display = "none";
                                                        const parent = target.parentElement;
                                                        if (parent) {
                                                            const span = document.createElement('span');
                                                            span.className = "text-black font-bold text-sm";
                                                            span.textContent = plugin.name.substring(0, 2).toUpperCase();
                                                            parent.innerHTML = '';
                                                            parent.appendChild(span);
                                                            parent.className = "h-10 w-10 rounded bg-gray-100 flex items-center justify-center mr-3";
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1637,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/create-agent/page.tsx",
                                                lineNumber: 1636,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1635,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-medium text-black",
                                                    children: plugin.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1660,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-black",
                                                    children: [
                                                        plugin.id === "wordpress" && "Embed chatbot on WordPress sites",
                                                        plugin.id === "whatsapp" && "Connect via WhatsApp Business API",
                                                        plugin.id === "html-css" && "Custom HTML/CSS integration",
                                                        plugin.id === "instagram" && "Instagram Direct Messages integration",
                                                        plugin.id === "messenger" && "Facebook Messenger integration via Meta",
                                                        plugin.id === "telegram" && "Telegram Bot API integration",
                                                        plugin.id === "discord" && "Discord bot integration"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/create-agent/page.tsx",
                                                    lineNumber: 1661,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1659,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1634,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1633,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 1632,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, plugin.id, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1627,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 1625,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-medium mb-4 text-black",
                        children: "Plugin Configuration"
                    }, void 0, false, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1678,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 p-4 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-black mb-3",
                                children: "Enable plugins above to configure their settings. Each plugin will require specific API keys or authentication tokens."
                            }, void 0, false, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1680,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                variant: "outline",
                                className: "text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Puzzle$3e$__["Puzzle"], {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1682,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "View Plugin Documentation"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create-agent/page.tsx",
                                lineNumber: 1681,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create-agent/page.tsx",
                        lineNumber: 1679,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 1677,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dialog, {
                open: showEmbed,
                onOpenChange: (open)=>{
                    setShowEmbed(open);
                    if (!open) {
                        setEmbedError(null);
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogContent, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogHeader, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogTitle, {
                                    children: "Embed Script"
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1691,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogDescription, {
                                    children: "Copy and paste this into your website's HTML."
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1692,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 1690,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                isEmbedLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-sm text-black",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: "h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1696,
                                            columnNumber: 75
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Preparing your embed..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1696,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : embedError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3",
                                    children: embedError
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1698,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "bg-gray-100 text-black p-3 rounded overflow-auto text-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: snippet
                                    }, void 0, false, {
                                        fileName: "[project]/app/create-agent/page.tsx",
                                        lineNumber: 1701,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1700,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 justify-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                            onClick: copySnippet,
                                            variant: "secondary",
                                            disabled: !!embedError || isEmbedLoading,
                                            children: "Copy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1705,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                            onClick: ()=>setShowEmbed(false),
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create-agent/page.tsx",
                                            lineNumber: 1706,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create-agent/page.tsx",
                                    lineNumber: 1704,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create-agent/page.tsx",
                            lineNumber: 1694,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/create-agent/page.tsx",
                    lineNumber: 1689,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/create-agent/page.tsx",
                lineNumber: 1688,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/create-agent/page.tsx",
        lineNumber: 1620,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(PluginsTab, "sqX1Sbv3L8Rzwuc54DVdz1PnRpk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c9 = PluginsTab;
// Page Component
const CreateAgentPage = ()=>{
    _s2();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClose = ()=>{
        setIsOpen(false);
        router.back();
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreateAgentModal, {
        onClose: handleClose
    }, void 0, false, {
        fileName: "[project]/app/create-agent/page.tsx",
        lineNumber: 1727,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(CreateAgentPage, "kywuo8AAW+zzfDe4DXM+dXGxqfA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c10 = CreateAgentPage;
const __TURBOPACK__default__export__ = CreateAgentPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "CreateAgentModal");
__turbopack_context__.k.register(_c1, "ConfigurationTab");
__turbopack_context__.k.register(_c2, "FormFieldItem");
__turbopack_context__.k.register(_c3, "FineTuningTab");
__turbopack_context__.k.register(_c4, "ExtractedContentList");
__turbopack_context__.k.register(_c5, "StyleTab");
__turbopack_context__.k.register(_c6, "AvatarPreview");
__turbopack_context__.k.register(_c7, "ColorSwatch");
__turbopack_context__.k.register(_c8, "ColorPicker");
__turbopack_context__.k.register(_c9, "PluginsTab");
__turbopack_context__.k.register(_c10, "CreateAgentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_create-agent_page_tsx_0a9091bb._.js.map