
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/AppSidebar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CurrencyProvider } from '@/contexts/CurrencyContext';
import { useIsMobile } from '@/hooks/use-mobile';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <CurrencyProvider>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          {/* Only show sidebar on desktop */}
          {!isMobile && <AppSidebar />}
          <div className="flex-1 flex flex-col min-w-0">
            <Header />
            <main className="flex-1 container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-full">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </SidebarProvider>
    </CurrencyProvider>
  );
};

export default MainLayout;
