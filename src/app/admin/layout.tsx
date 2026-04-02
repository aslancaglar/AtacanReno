"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  Image,
  Star,
  Menu,
  X,
  ChevronLeft,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/devis", label: "Demandes de devis", icon: FileText },
  { href: "/admin/clients", label: "Clients", icon: Users },
  { href: "/admin/portfolio", label: "Portfolio", icon: Image },
  { href: "/admin/avis", label: "Avis clients", icon: Star },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex font-[family-name:var(--font-manrope)]">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-[260px] bg-white border-r border-border flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-extrabold text-nav tracking-tight">
                ATC Rénovation
              </h1>
              <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">
                Administration
              </p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-muted-foreground hover:text-nav"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive =
              item.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "text-muted-foreground hover:text-nav hover:bg-muted/60"
                }`}
              >
                <Icon className="w-[18px] h-[18px] flex-shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Back to site & Logout */}
        <div className="p-3 border-t border-border flex flex-col gap-1">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-nav hover:bg-muted/60 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Retour au site
          </Link>
          <form action={async () => {
            const { logoutAction } = await import("../login/actions");
            await logoutAction();
          }}>
            <button
              type="submit"
              className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-red-500 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
              Se déconnecter
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-border px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-muted-foreground hover:text-nav"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1" />
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
