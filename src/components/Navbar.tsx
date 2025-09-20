import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Menu, Home, User, Calendar, MessageSquare, Calculator, Monitor, Mail } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { icon: <Home className="w-4 h-4" />, text: "ホーム", path: "/" },
    { icon: <User className="w-4 h-4" />, text: "自分について", path: "/about" },
    { icon: <Monitor className="w-4 h-4" />, text: "Windows", path: "/windows" },
    { icon: <Calendar className="w-4 h-4" />, text: "サークルスケジューラー", path: "/circle" },
    { icon: <MessageSquare className="w-4 h-4" />, text: "ブログ", path: "/blog" },
    { icon: <Mail className="w-4 h-4" />, text: "コンタクト", path: "/contact" },
    { icon: <Calculator className="w-4 h-4" />, text: "鍛刀CP計算機", path: "/tourabu/tantou-cp" },
  ]

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Hamburger Menu */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-primary-foreground/10"
          >
            <Menu className="w-6 h-6" />
          </Button>

          {/* Site Title */}
          <Link
            to="/"
            className="text-xl font-bold hover:opacity-80 transition-opacity"
          >
            kjfsm.net
          </Link>

          {/* Home Button */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-primary-foreground/10"
          >
            <Link to="/">
              <Home className="w-6 h-6" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-primary-foreground/20 py-4">
            <nav className="space-y-2">
              {menuItems.map(({ icon, text, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-primary-foreground/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {icon}
                  <span>{text}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}