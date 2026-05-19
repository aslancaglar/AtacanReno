"use client";

import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import MobileStickyCTA from "./MobileStickyCTA";
import VacationModal from "./VacationModal";

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
  hideWhatsApp?: boolean;
  hideStickyCTA?: boolean;
}

const Layout = ({ children, hideHeader, hideFooter, hideWhatsApp, hideStickyCTA }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative" suppressHydrationWarning>
      {!hideHeader && <Header />}
      <main className="flex-1">{children}</main>
      {!hideFooter && <Footer />}
      {!hideWhatsApp && <WhatsAppButton />}
      {!hideStickyCTA && <MobileStickyCTA />}
      <VacationModal />
    </div>
  );
};

export default Layout;
