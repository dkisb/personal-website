import { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeWrapper = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          const newMode = prev === 'light' ? 'dark' : 'light';
          document.documentElement.classList.toggle('dark', newMode === 'dark');
          localStorage.setItem('theme', newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                background: {
                  default: '#E8EAF6', // Light retro purple
                  paper: '#C5CAE9', // Deeper purple
                },
                primary: {
                  main: '#E64A19', // Retro orange
                  contrastText: '#FFFFFF', // White text
                },
                secondary: {
                  main: '#0288D1', // Retro blue
                  contrastText: '#FFFFFF', // White text
                },
                text: {
                  primary: '#1A1A1A', // Near-black
                  secondary: '#BF360C', // Deep retro red
                },
              }
            : {
                background: {
                  default: '#2A2E43', // Deep retro purple
                  paper: '#3C4057', // Darker purple-gray
                },
                primary: {
                  main: '#FFCA28', // Neon yellow
                  contrastText: '#1A1A1A', // Near-black text
                },
                secondary: {
                  main: '#0288D1', // Retro blue
                  contrastText: '#1A1A1A', // Near-black text
                },
                text: {
                  primary: '#E8ECEF', // Light gray
                  secondary: '#81C784', // Retro light green
                },
              }),
        },
        shadows: {
          ...(mode === 'light'
            ? {
                4: '0 4px 12px rgba(0, 0, 0, 0.15)', // shadow-lg
                8: '0 4px 12px rgba(230, 74, 25, 0.3)', // Orange glow
              }
            : {
                4: '0 4px 12px rgba(0, 0, 0, 0.4)', // shadow-xl
                8: '0 4px 12px rgba(255, 202, 40, 0.3)', // Yellow glow
              }),
        },
        typography: {
          fontFamily: "'Inter', sans-serif",
          h1: { fontSize: '2.25rem', fontWeight: 700 }, // text-4xl
          h2: { fontSize: '1.5rem', fontWeight: 600 }, // text-2xl
          body1: { fontSize: '1rem' }, // text-base
          button: { fontSize: '0.875rem', fontWeight: 500 }, // text-sm
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
