
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ToolWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

const ToolWrapper = ({ title, description, children, className = '' }: ToolWrapperProps) => {
  return (
    <div className={`w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 ${className}`}>
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{title}</h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
          {description}
        </p>
      </div>
      
      <Card className="mx-2 sm:mx-4 md:mx-auto bg-card text-card-foreground border-border">
        <CardContent className="p-4 sm:p-6">
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default ToolWrapper;
