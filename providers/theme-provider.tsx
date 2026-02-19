"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider
            attribute="class"      // Change this to "class" for Dark/Light
            defaultTheme="system"  // Let it follow the user's computer setting
            enableSystem
        >
            {children}
        </NextThemesProvider>
    );
}