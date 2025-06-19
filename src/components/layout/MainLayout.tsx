
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex">
        {!isHomePage && (
          <SidebarProvider>
            <AppSidebar />
            <main className="flex-1 p-6 md:p-8 lg:p-12">
              <div className="max-w-7xl mx-auto">
                <div className="animate-fade-in-up">
                  {children}
                </div>
              </div>
            </main>
          </SidebarProvider>
        )}
        
        {isHomePage && (
          <main className="flex-1">
            {children}
          </main>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
