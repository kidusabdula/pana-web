declare module "next-themes" {
    import * as React from "react";
  
    export interface ThemeProviderProps {
      children: React.ReactNode;
      attribute?: string;
      defaultTheme?: string;
      value?: Record<string, string>;
      forcedTheme?: string;
      enableSystem?: boolean;
      disableTransitionOnChange?: boolean;
    }
  
    export function useTheme(): {
      theme?: string;
      setTheme: (theme: string) => void;
      systemTheme?: string;
    };
  
    export const ThemeProvider: React.FC<ThemeProviderProps>;
  }
  