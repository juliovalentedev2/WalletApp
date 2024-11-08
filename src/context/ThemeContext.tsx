import { createContext, ReactNode, useContext } from 'react';
import { theme, ThemType } from '../theme';

const ThemeContext = createContext<ThemType>(theme)

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
  
  export const useTheme = () => useContext(ThemeContext);