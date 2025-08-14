"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Link from "next/link";

type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    const initialDarkMode = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    setDarkMode(initialDarkMode);
    
    // Apply the theme class to the document element
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    setMounted(true);
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (!localStorage.getItem('theme')) { // Only change if user hasn't set a preference
        const systemPrefersDark = mediaQuery.matches;
        setDarkMode(systemPrefersDark);
        if (systemPrefersDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Update DOM and localStorage
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Don't render the app until we know the theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle dark mode"
      className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      onClick={toggleTheme}
    >
      {darkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.045 2.445-7.513 6.002-9.002a.75.75 0 01.91.37.75.75 0 01-.07.779A7.501 7.501 0 0012 19.5a7.48 7.48 0 006.603-3.908.75.75 0 01.779-.07.75.75 0 01.37.91z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700 dark:text-gray-200">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m8.485-8.485l-1.06 1.06M4.515 4.515l1.06 1.06M21 12h-1.5M4.5 12H3m16.485 4.485l-1.06-1.06M4.515 19.485l1.06-1.06" />
        </svg>
      )}
    </button>
  );
};

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement;
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  if (!mounted) {
    return (
      <header className="w-full bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-700 dark:text-blue-400 tracking-tight">MyPortfolio</span>
          </div>
          <div className="w-10 h-10"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-700 dark:text-blue-400 tracking-tight">MyPortfolio</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/about" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
          <Link href="/projects" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="/experience" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            className="md:hidden rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-2 px-4 pb-4 animate-fade-in">
          <Link href="/" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 block">Home</Link>
          <Link href="/about" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 block">About</Link>
          <Link href="/projects" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 block">Projects</Link>
          <Link href="/experience" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 block">Experience</Link>
        </nav>
      )}
    </header>
  );
};

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ 
  children 
}: ClientLayoutProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
            <p>  {new Date().getFullYear()} Farhan Wahyuda. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
