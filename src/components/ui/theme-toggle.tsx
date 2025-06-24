import { Moon, Sun, Palette, Sparkles, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";

const themes = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'metallic', label: 'Metallic', icon: Palette },
  { value: 'system', label: 'System', icon: Monitor },
];

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="hover:bg-primary/10 transition-all duration-300">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <Palette className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all metallic:rotate-0 metallic:scale-100" />
          <Sparkles className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("metallic")}>
          <Palette className="mr-2 h-4 w-4" />
          Metallic
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("ocean-wave")}>
          <Sparkles className="mr-2 h-4 w-4" />
          Ocean Wave
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("sunset-glow")}>
          <Sparkles className="mr-2 h-4 w-4" />
          Sunset Glow
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("aurora-borealis")}>
          <Sparkles className="mr-2 h-4 w-4" />
          Aurora Borealis
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("cherry-blossom")}>
          <Sparkles className="mr-2 h-4 w-4" />
          Cherry Blossom
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("forest-mist")}>
          <Sparkles className="mr-2 h-4 w-4" />
          Forest Mist
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("cosmic-nebula")}>
          <Sparkles className="mr-2 h-4 w-4" />
          Cosmic Nebula
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
