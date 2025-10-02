import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType = 'tech' | 'neomorphism';

interface ThemeContextType {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  themes: Record<ThemeType, ThemeConfig>;
}

interface ThemeConfig {
  name: string;
  description: string;
  cssClass: string;
}

const themes: Record<ThemeType, ThemeConfig> = {
  tech: {
    name: 'Темная',
    description: 'Темная тема',
    cssClass: 'theme-tech'
  },
  neomorphism: {
    name: 'Светлая',
    description: 'Светлая тема',
    cssClass: 'theme-neomorphism'
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('neomorphism');

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem('selectedTheme', theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Remove all theme classes
    Object.values(themes).forEach(theme => {
      document.documentElement.classList.remove(theme.cssClass);
    });
    // Add current theme class
    document.documentElement.classList.add(themes[currentTheme].cssClass);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};