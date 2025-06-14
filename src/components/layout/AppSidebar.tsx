
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
} from '@/components/ui/sidebar';
import { Home, Percent, Calculator, Gift, GanttChartSquare, CalendarRange } from 'lucide-react';

const menuItems = [
  { title: 'Home', url: '/', icon: Home, pageId: 'home' },
  { title: 'GST Calculator', url: '/gst-calculator', icon: Percent, pageId: 'gst-calculator' },
  { title: 'Percentage Calculator', url: '/percentage-calculator', icon: Calculator, pageId: 'percentage-calculator' },
  { title: 'Age Calculator', url: '/age-calculator', icon: Gift, pageId: 'age-calculator' },
  { title: 'Date Difference Calculator', url: '/date-difference-calculator', icon: CalendarRange, pageId: 'date-difference-calculator' },
  // Add more tools here as they are implemented
];

const AppSidebar = () => {
  const location = useLocation();

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
                  <SidebarMenuButton
                    asChild
                    variant="default" // Use default variant
                    isActive={location.pathname === item.url} // Set isActive prop
                    className="w-full justify-start"
                  >
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
