"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
