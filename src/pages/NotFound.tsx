
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center animate-fade-in">
      <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
      <p className="text-2xl text-foreground mb-2">Oops! Page not found.</p>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button asChild>
        <Link to="/" className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          Return to Homepage
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
