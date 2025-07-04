
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex">
        {!isHomePage && !isMobile && (
          <SidebarProvider>
            <AppSidebar />
            <main className="flex-1 p-3 sm:p-6 md:p-8 lg:p-12">
              <div className="max-w-7xl mx-auto">
                <div className="animate-fade-in-up">
                  {children}
                </div>
              </div>
            </main>
          </SidebarProvider>
        )}
        
        {(isHomePage || isMobile) && (
          <main className="flex-1 p-3 sm:p-6 md:p-8 lg:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="animate-fade-in-up">
                {children}
              </div>
            </div>
          </main>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
