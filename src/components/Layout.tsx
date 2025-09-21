import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Separator } from "./ui/separator";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto max-w-4xl px-4 py-8">
        <Outlet />
      </main>
      <Separator />
      <Footer />
    </div>
  );
}
