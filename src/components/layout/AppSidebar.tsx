
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar'; // Assuming these are correct paths for shadcn sidebar components
import { Home, Percent, Calculator, Gift, GanttChartSquare, Users } from 'lucide-react'; // Using more relevant icons

const menuItems = [
  { title: 'Home', url: '/', icon: Home, pageId: 'home' },
  { title: 'GST Calculator', url: '/gst-calculator', icon: Percent, pageId: 'gst-calculator' },
  { title: 'Percentage Calculator', url: '/percentage-calculator', icon: Calculator, pageId: 'percentage-calculator' },
  { title: 'Age Calculator', url: '/age-calculator', icon: Gift, pageId: 'age-calculator' },
  // Add more tools here as they are implemented
];

const AppSidebar = () => {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4 border-b">
        <Link to="/" className="flex items-center gap-2">
          <GanttChartSquare className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-semibold text-foreground">SmartTools</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild variant={location.pathname === item.url ? 'default' : 'ghost'} className="w-full justify-start">
                    <Link to={item.url}>
                      <item.icon className="h-5 w-5 mr-3" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t">
        <div className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} SmartTools India
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
