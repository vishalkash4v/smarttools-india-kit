
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AppSidebar from '@/components/layout/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/tools';

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background via-background to-muted/30">
        {!isHomePage && <AppSidebar />}
        <main className={`flex-1 overflow-y-auto ${!isHomePage ? 'p-6 md:p-8 lg:p-12' : ''}`}>
          {!isHomePage && (
            <div className="max-w-7xl mx-auto">
              <div className="animate-fade-in-up">
                <Outlet />
              </div>
            </div>
          )}
          {isHomePage && <Outlet />}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
