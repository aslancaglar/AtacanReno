"use client";

import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
