'use client';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false} storageKey="abstract-theme-v1">
      {children}
    </ThemeProvider>
  );
}
