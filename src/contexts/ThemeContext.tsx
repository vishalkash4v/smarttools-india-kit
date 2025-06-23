
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'metallic' | 'system' | 'ocean-wave' | 'sunset-glow' | 'aurora-borealis' | 'cherry-blossom' | 'forest-mist' | 'cosmic-nebula';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove all theme classes
    root.classList.remove(
      'light', 
      'dark', 
      'metallic', 
      'theme-ocean-wave', 
      'theme-sunset-glow', 
      'theme-aurora-borealis', 
      'theme-cherry-blossom', 
      'theme-forest-mist', 
      'theme-cosmic-nebula'
    );

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';

      root.classList.add(systemTheme);
      return;
    }

    // Handle gradient themes with proper class names
    const gradientThemes = ['ocean-wave', 'sunset-glow', 'aurora-borealis', 'cherry-blossom', 'forest-mist', 'cosmic-nebula'];
    
    if (gradientThemes.includes(theme)) {
      root.classList.add(`theme-${theme}`);
      // Also apply CSS variables for gradient themes
      if (theme === 'ocean-wave') {
        root.style.setProperty('--primary', '199 89% 48%');
        root.style.setProperty('--background', '0 0% 100%');
      } else if (theme === 'sunset-glow') {
        root.style.setProperty('--primary', '45 93% 47%');
        root.style.setProperty('--background', '0 0% 100%');
      } else if (theme === 'aurora-borealis') {
        root.style.setProperty('--primary', '262 83% 65%');
        root.style.setProperty('--background', '0 0% 100%');
      } else if (theme === 'cherry-blossom') {
        root.style.setProperty('--primary', '330 81% 60%');
        root.style.setProperty('--background', '0 0% 100%');
      } else if (theme === 'forest-mist') {
        root.style.setProperty('--primary', '160 84% 39%');
        root.style.setProperty('--background', '0 0% 100%');
      } else if (theme === 'cosmic-nebula') {
        root.style.setProperty('--primary', '239 84% 67%');
        root.style.setProperty('--background', '0 0% 100%');
      }
    } else {
      // Handle standard themes
      root.classList.add(theme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
