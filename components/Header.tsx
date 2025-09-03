import { Button } from "./ui/button"
import { Bot } from "lucide-react"

interface HeaderProps {
  onOpenAuth: (type: "login" | "signup") => void
}

const Header = ({ onOpenAuth }: HeaderProps) => {
  return (
    <header className="relative z-50 bg-white/90 backdrop-blur-md border-b border-white/20 sticky top-0 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">
            proaichats
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Pricing</a>
          <a href="#documentation" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Documentation</a>
          <div className="relative group">
            <button
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium inline-flex items-center"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Integrations
              <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md border bg-white py-2 shadow-lg opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition">
              <a
                href="/integrations/wordpress"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                WordPress
              </a>
            </div>
          </div>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={() => onOpenAuth("login")}
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Sign In
          </Button>
          <Button
            onClick={() => onOpenAuth("signup")}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
