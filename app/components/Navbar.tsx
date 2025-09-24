import {
  Calculator,
  Calendar,
  Home,
  Mail,
  Menu,
  MessageSquare,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "~/shadcn/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: Home, text: "ホーム", path: "/" },
    {
      icon: User,
      text: "自分について",
      path: "/about",
    },
    {
      icon: Calendar,
      text: "サークルスケジューラー",
      path: "/circle",
    },
    {
      icon: MessageSquare,
      text: "ブログ",
      path: "/blog",
    },
    {
      icon: Mail,
      text: "コンタクト",
      path: "/contact",
    },
    {
      icon: Calculator,
      text: "鍛刀CP計算機",
      path: "/tourabu/tantou-cp",
    },
  ];

  return (
    <header className="bg-primary text-primary-foreground shadow-lg relative z-50">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl hover:opacity-90 transition-opacity">
            kjfsm.net
          </Link>

          {/* Hamburger Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-primary-foreground/10 transition-colors"
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {isMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-primary border-t border-primary-foreground/20 shadow-lg">
            <nav className="mx-auto max-w-4xl px-4 py-4">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-3 rounded-md px-4 py-3 transition-colors hover:bg-primary-foreground/10 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="size-5 text-primary-foreground/80 group-hover:text-primary-foreground transition-colors" />
                    <span className="font-medium">{item.text}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
