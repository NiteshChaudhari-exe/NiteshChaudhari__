import { createContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// Context is created but not exported to comply with react-refresh rules
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Export only the provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Export context for use in hook file
export { ThemeContext };
