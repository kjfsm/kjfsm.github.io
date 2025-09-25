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
    <header className="relative z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            title="ホームに戻る"
            className="font-bold text-xl transition-opacity hover:opacity-90"
          >
            kjfsm.net
          </Link>

          {/* Hamburger Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="transition-colors hover:bg-primary-foreground/10"
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
          <div className="absolute top-16 right-0 left-0 border-primary-foreground/20 border-t bg-primary shadow-lg">
            <nav className="mx-auto max-w-4xl px-4 py-4">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    title={item.text}
                    className="group flex items-center gap-3 rounded-md px-4 py-3 transition-colors hover:bg-primary-foreground/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="size-5 text-primary-foreground/80 transition-colors group-hover:text-primary-foreground" />
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
