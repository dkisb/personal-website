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

  // Neon palette for accents
  const NEON = {
    blue: '#00FFF7',
    green: '#39FF14',
    pink: '#FF4EC4',
    yellow: '#FFF700',
    purple: '#B26CFF',
    deepNavy: '#181C24',
    nearBlack: '#111111',
    white: '#FFFFFF',
    lightBlueBg: '#F0F4FF', // A very pale blue, subtle, not neon
    lightBluePaper: '#F6FAFF', // For paper/cards
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                background: {
                  default: NEON.lightBlueBg, // Subtle blue-tinted background
                  paper: NEON.white, // White cards/panels
                  accent: NEON.pink,
                  secondary: NEON.green,
                },
                primary: {
                  main: NEON.pink,
                  contrastText: NEON.white,
                },
                secondary: {
                  main: NEON.green,
                  contrastText: NEON.nearBlack,
                },
                info: {
                  main: NEON.purple,
                  contrastText: NEON.nearBlack,
                },
                warning: {
                  main: NEON.yellow,
                  contrastText: NEON.nearBlack,
                },
                success: {
                  main: NEON.green,
                  contrastText: NEON.nearBlack,
                },
                error: {
                  main: '#FF1744',
                  contrastText: NEON.white,
                },
                text: {
                  primary: NEON.nearBlack, // Always readable on pale backgrounds
                  secondary: NEON.deepNavy,
                  disabled: '#888',
                },
              }
            : {
                background: {
                  default: '#0A1433',
                  paper: '#151A28',
                  accent: NEON.green,
                  secondary: NEON.pink,
                },
                primary: {
                  main: NEON.green,
                  contrastText: '#0A1433',
                },
                secondary: {
                  main: NEON.pink,
                  contrastText: '#0A1433',
                },
                info: {
                  main: NEON.purple,
                  contrastText: '#0A1433',
                },
                warning: {
                  main: NEON.yellow,
                  contrastText: '#0A1433',
                },
                success: {
                  main: NEON.green,
                  contrastText: '#0A1433',
                },
                error: {
                  main: '#FF1744',
                  contrastText: '#0A1433',
                },
                text: {
                  primary: NEON.white,
                  secondary: NEON.yellow,
                  disabled: '#666',
                },
              }),
        },
        shadows: {
          ...(mode === 'light'
            ? {
                4: '0 4px 16px 0 ' + NEON.pink,
                8: '0 8px 32px 0 ' + NEON.blue,
              }
            : {
                4: '0 4px 24px 0 ' + NEON.green,
                8: '0 8px 32px 0 ' + NEON.pink,
              }),
        },
        typography: {
          fontFamily: "'Press Start 2P','Inter',monospace,sans-serif",
          h1: {
            fontSize: '2.5rem',
            fontWeight: 900,
            letterSpacing: '2px',
            color: mode === 'light' ? NEON.pink : NEON.green,
            textShadow:
              mode === 'light'
                ? `0 0 8px ${NEON.pink}, 0 0 32px ${NEON.blue}`
                : `0 0 8px ${NEON.green}, 0 0 32px ${NEON.pink}`,
          },
          h2: {
            fontSize: '1.5rem',
            fontWeight: 700,
            color: mode === 'light' ? NEON.nearBlack : NEON.white,
            textShadow:
              mode === 'light'
                ? `0 0 4px ${NEON.blue}, 0 0 8px ${NEON.purple}`
                : `0 0 4px ${NEON.pink}, 0 0 16px ${NEON.green}`,
          },
          h3: {
            fontSize: '1.15rem',
            fontWeight: 600,
            color: mode === 'light' ? NEON.green : NEON.yellow,
          },
          body1: {
            fontSize: '1rem',
            color: mode === 'light' ? NEON.nearBlack : NEON.white,
          },
          button: {
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '1px',
            color: mode === 'light' ? NEON.white : '#0A1433',
            textShadow: mode === 'light' ? `0 0 4px ${NEON.pink}` : `0 0 4px ${NEON.green}`,
          },
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
