import {
  Calculator,
  Calendar,
  Home,
  Mail,
  Menu,
  MessageSquare,
  Monitor,
  User,
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
      icon: Monitor,
      text: "Windows",
      path: "/windows",
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
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Hamburger Menu */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-primary-foreground/10"
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Site Title */}
          <Link
            to="/"
            className="font-bold text-xl transition-opacity hover:opacity-80"
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
              <Home className="h-6 w-6" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-primary-foreground/20 border-t py-4">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-3 rounded-md px-4 py-2 transition-colors hover:bg-primary-foreground/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {<item.icon className="size-4" />}
                  <span>{item.text}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
