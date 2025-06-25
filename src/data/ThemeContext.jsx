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

  // Modern palette for both modes
  const COLORS = {
    // Shared
    blue: '#00BFFF', // Deep Sky Blue, works great for accents, buttons, etc
    cyan: '#20CFCF', // Vibrant accent for dark mode
    cyanLight: '#4FD1C5', // Lighter cyan for dark mode
    yellow: '#FFD600', // Clean and less neon yellow for warnings

    // Light theme
    blueLight: '#0099E6', // Slightly dimmer blue for light backgrounds
    lightBg: '#F5FAFE', // Light blue-tinted, not too pale, works with React blue
    paper: '#F7FAFC', // Slightly off-white, enough contrast for cards, React logo pops
    textPrimary: '#1A2636', // Deep blue-black for best readability
    textSecondary: '#466088',
    white: '#FFFFFF',

    // Dark theme
    deepNavy: '#181C24',
    nearBlack: '#111111',
    darkBg: '#0A1433',
    darkPaper: '#151A28',
    pink: '#FF4EC4',
    purple: '#B26CFF',
    sky: '#60AFFF',
  };

  function buildShadows(mode) {
    const accentShadow = mode === 'light' ? COLORS.blue : COLORS.cyan;
    const blueShadow = COLORS.blue;
    const pinkShadow = COLORS.pink;
    const defaultShadows = [
      'none',
      '0px 1px 3px rgba(0,0,0,0.12), 0px 1px 1px rgba(0,0,0,0.09), 0px 2px 1px rgba(0,0,0,0.07)',
      '0px 1.5px 5px rgba(0,0,0,0.10), 0px 2px 2px rgba(0,0,0,0.07), 0px 3px 1px rgba(0,0,0,0.05)',
      '0px 3px 10px rgba(0,0,0,0.08), 0px 3px 3px rgba(0,0,0,0.05), 0px 4px 2px rgba(0,0,0,0.03)',
      // 4
      `0 4px 16px 0 ${accentShadow}`,
      // 5-7: default
      '0px 5px 15px rgba(0,0,0,0.08), 0px 6px 6px rgba(0,0,0,0.04), 0px 8px 4px rgba(0,0,0,0.02)',
      '0px 6px 20px rgba(0,0,0,0.07), 0px 7px 7px rgba(0,0,0,0.03), 0px 10px 5px rgba(0,0,0,0.01)',
      '0px 7px 25px rgba(0,0,0,0.05), 0px 8px 8px rgba(0,0,0,0.02), 0px 12px 6px rgba(0,0,0,0.01)',
      // 8
      mode === 'light' ? `0 8px 32px 0 ${blueShadow}` : `0 8px 32px 0 ${pinkShadow}`,
    ];
    while (defaultShadows.length < 25) defaultShadows.push('none');
    return defaultShadows;
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                background: {
                  default: COLORS.lightBg, // Blue-tinted, React logo looks great here!
                  paper: COLORS.paper, // Slightly off-white for cards
                },
                primary: {
                  main: COLORS.blue, // Use blue for main actions
                  contrastText: COLORS.white,
                },
                secondary: {
                  main: COLORS.purple,
                  contrastText: COLORS.white,
                },
                info: {
                  main: COLORS.cyan,
                  contrastText: COLORS.textPrimary,
                },
                warning: {
                  main: COLORS.yellow,
                  contrastText: COLORS.textPrimary,
                },
                success: {
                  main: COLORS.cyan,
                  contrastText: COLORS.textPrimary,
                },
                error: {
                  main: '#FF1744',
                  contrastText: COLORS.white,
                },
                text: {
                  primary: COLORS.textPrimary,
                  secondary: COLORS.textSecondary,
                  disabled: '#888',
                },
              }
            : {
                background: {
                  default: COLORS.darkBg,
                  paper: COLORS.darkPaper,
                  accent: COLORS.cyan,
                },
                primary: {
                  main: COLORS.cyan, // Teal/cyan as main!
                  contrastText: COLORS.darkBg,
                },
                secondary: {
                  main: COLORS.purple,
                  contrastText: COLORS.darkBg,
                },
                info: {
                  main: COLORS.sky,
                  contrastText: COLORS.darkBg,
                },
                warning: {
                  main: COLORS.yellow,
                  contrastText: COLORS.darkBg,
                },
                success: {
                  main: COLORS.cyanLight,
                  contrastText: COLORS.darkBg,
                },
                error: {
                  main: '#FF1744',
                  contrastText: COLORS.darkBg,
                },
                text: {
                  primary: COLORS.white,
                  secondary: COLORS.sky,
                  disabled: '#666',
                },
              }),
        },
        shadows: buildShadows(mode),
        typography: {
          fontFamily: "'Press Start 2P','Inter',monospace,sans-serif",
          h1: {
            fontSize: '2.5rem',
            fontWeight: 900,
            letterSpacing: '2px',
            color: mode === 'light' ? COLORS.blue : COLORS.cyan,
            textShadow:
              mode === 'light'
                ? `0 0 8px ${COLORS.blue}, 0 0 32px ${COLORS.cyan}`
                : `0 0 8px ${COLORS.cyan}, 0 0 32px ${COLORS.purple}`,
          },
          h2: {
            fontSize: '1.5rem',
            fontWeight: 700,
            color: mode === 'light' ? COLORS.textPrimary : COLORS.white,
            textShadow:
              mode === 'light'
                ? `0 0 4px ${COLORS.cyan}, 0 0 8px ${COLORS.purple}`
                : `0 0 4px ${COLORS.purple}, 0 0 16px ${COLORS.cyan}`,
          },
          h3: {
            fontSize: '1.15rem',
            fontWeight: 600,
            color: mode === 'light' ? COLORS.blue : COLORS.sky,
          },
          body1: {
            fontSize: '1rem',
            color: mode === 'light' ? COLORS.textPrimary : COLORS.white,
          },
          button: {
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '1px',
            color: mode === 'light' ? COLORS.white : COLORS.darkBg,
            textShadow: mode === 'light' ? `0 0 4px ${COLORS.blue}` : `0 0 4px ${COLORS.cyan}`,
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
