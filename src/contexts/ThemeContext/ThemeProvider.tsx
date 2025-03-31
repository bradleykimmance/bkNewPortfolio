import useIsMounted from '../../hooks/useIsMounted.ts';
import { ThemeContext } from './ThemeContext.ts';
import React, {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export type Theme = 'dark' | 'light';

type ThemeProviderProperties = {
  readonly children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProperties> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>('light');
  const isMounted = useIsMounted();

  useEffect(() => {
    let isMountedTimeout: NodeJS.Timeout | number | undefined;
    if (isMounted) {
      isMountedTimeout = setTimeout(
        () => document.documentElement.classList.add('loaded'),
        100,
      );
    }

    return () => {
      if (isMountedTimeout !== undefined) {
        clearTimeout(isMountedTimeout);
      }
    };
  }, [isMounted]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as null | Theme;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback((): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
