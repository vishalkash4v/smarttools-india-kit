
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppSidebar from '@/components/layout/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar'; // Assuming this is the correct path for shadcn sidebar provider

const MainLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {/* Header can be added here if needed */}
          <Outlet /> {/* This is where the page content will be rendered */}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
