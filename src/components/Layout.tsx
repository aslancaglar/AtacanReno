"use client";

import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
  hideWhatsApp?: boolean;
}

const Layout = ({ children, hideHeader, hideFooter, hideWhatsApp }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      {!hideHeader && <Header />}
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
      {!hideWhatsApp && <WhatsAppButton />}
    </div>
  );
};

export default Layout;
