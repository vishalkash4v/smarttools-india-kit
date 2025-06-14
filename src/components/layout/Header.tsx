
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  backTo?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBackButton = true, 
  backTo = -1 
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (typeof backTo === 'string') {
      navigate(backTo);
    } else {
      navigate(backTo);
    }
  };

  return (
    <header className="bg-background/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleBack}
                className="hover-lift"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            )}
            
            <Link to="/" className="flex items-center gap-2 group">
              <Sparkles className="h-6 w-6 text-primary group-hover:animate-pulse" />
              <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                SmartTools
              </span>
            </Link>
            
            {title && (
              <div className="hidden md:block">
                <span className="text-muted-foreground mx-2">•</span>
                <span className="font-medium text-foreground">{title}</span>
              </div>
            )}
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <Button asChild variant="ghost" className="hover-lift">
              <Link to="/tools">All Tools</Link>
            </Button>
            <Button asChild variant="ghost" className="hover-lift">
              <Link to="/themes">Themes</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
