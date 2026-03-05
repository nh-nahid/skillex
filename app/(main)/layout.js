import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";

const navLinks = [
  { title: "Product", href: "/#features" },
  { title: "Solutions", href: "/solutions" },
  { title: "Resources", href: "/resources" },
  { title: "Pricing", href: "/pricing" },
];

const MainLayout = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-white">

      {/* 🔥 Animated Dark Gradient (Same Colors) */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-slate-950 via-slate-900 to-black bg-[length:200%_200%] animate-gradient-x" />

      {/* ✨ Animated Glow (Same Indigo Color) */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px] animate-float" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg transition-transform duration-500 hover:rotate-6">
              S
            </div>
            <span className="text-lg font-semibold tracking-wide">
              Skillex
            </span>
          </Link>

          <MainNav items={navLinks} />

          <Link
            href="/signup"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex-1 pt-24 animate-fadeIn">
        {children}
      </main>

      {/* Footer */}
      <div className="border-t border-white/10 bg-black/40 backdrop-blur-lg">
        <SiteFooter />
      </div>
    </div>
  );
};

export default MainLayout;