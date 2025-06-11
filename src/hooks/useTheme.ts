import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get theme from localStorage or system preference
    const getInitialTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    const initialTheme = getInitialTheme();
    setIsDark(initialTheme);
    
    // Apply theme to document
    document.documentElement.classList.toggle('dark', initialTheme);
    
    setIsLoading(false);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if no manual preference is saved
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Update localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Apply theme to document with smooth transition
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    document.documentElement.classList.toggle('dark', newTheme);
    
    // Remove transition after animation completes
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);

    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('themeChange', { 
      detail: { isDark: newTheme } 
    }));
  };

  const setTheme = (theme: 'light' | 'dark' | 'system') => {
    if (theme === 'system') {
      localStorage.removeItem('theme');
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(systemPreference);
      document.documentElement.classList.toggle('dark', systemPreference);
    } else {
      const isDarkTheme = theme === 'dark';
      setIsDark(isDarkTheme);
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', isDarkTheme);
    }
  };

  return { 
    isDark, 
    toggleTheme, 
    setTheme, 
    isLoading 
  };
};