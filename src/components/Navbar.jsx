import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  useMediaQuery,
  useTheme,
  Divider,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTranslation } from 'react-i18next';
import NavButtons from './NavButtons';
import NavToggles from './NavToggles';
import lightLogo from '../assets/logo-light.svg';
import darkLogo from '../assets/logo-dark.svg';

export default function Navbar({ toggleTheme, mode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const LogoIcon = mode === 'dark' ? darkLogo : lightLogo;

  const languages = [
    { code: 'en', flag: '/en.svg' },
    { code: 'de', flag: '/de.svg' },
    { code: 'hu', flag: '/hu.svg' },
  ];

  const navItems = [
    { text: t('navbar.home'), section: 'hero', route: '/', offset: 0 },
    { text: t('navbar.about'), section: 'about', route: '/about', offset: 0 },
    { text: t('navbar.projects'), section: 'projects', route: '/projects', offset: 0 },
    { text: t('navbar.contact'), section: '/contact', route: '/contact', isExternal: true },
  ];

  const isHomePage = location.pathname === '/';

  // Scroll to top after navigation (for SPA)
  const handleContactClick = (e) => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <>
      <CssBaseline />
      <Box
        component="nav"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          height: 80,
          zIndex: 10,
          alignItems: 'center',
          justifyContent: 'center',
          px: 3,
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.6)' : 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* LOGO ON THE LEFT */}
        <Box
          sx={{
            position: 'absolute',
            left: 24,
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <RouterLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={LogoIcon}
              alt="Logo"
              sx={{
                width: { xs: 52, sm: 60, md: 70 },
                height: 'auto',
                maxHeight: 56,
              }}
            />
          </RouterLink>
        </Box>

        {isMobile ? (
          <>
            <Box sx={{ position: 'absolute', right: 24 }}>
              <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <Box sx={{ width: 240, mt: 2 }} role="presentation" onClick={() => setDrawerOpen(false)}>
                <List>
                  {navItems.map(({ text, section, route, isExternal, offset }) => (
                    <ListItem key={text} disablePadding>
                      <ListItemText
                        primary={
                          isExternal ? (
                            <RouterLink
                              to={route}
                              style={{ textDecoration: 'none', color: 'inherit' }}
                              onClick={handleContactClick}
                            >
                              {text}
                            </RouterLink>
                          ) : isHomePage ? (
                            <ScrollLink
                              to={section}
                              spy={true}
                              smooth={true}
                              duration={500}
                              offset={offset}
                              style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                              {text}
                            </ScrollLink>
                          ) : (
                            <RouterLink to={route} style={{ textDecoration: 'none', color: 'inherit' }}>
                              {text}
                            </RouterLink>
                          )
                        }
                        sx={{ px: 2, py: 1 }}
                      />
                    </ListItem>
                  ))}
                  <Divider sx={{ my: 1 }} />
                  <ListItem>
                    <IconButton onClick={toggleTheme} color="inherit">
                      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                  </ListItem>
                  <ListItem>
                    <Stack direction="row" spacing={1} alignItems="center">
                      {languages.map(({ code, flag }) => (
                        <IconButton key={code} onClick={() => i18n.changeLanguage(code)} sx={{ p: 0.5 }}>
                          <Box
                            component="img"
                            src={flag}
                            alt={code}
                            sx={{ width: 24, height: 24, borderRadius: '50%' }}
                          />
                        </IconButton>
                      ))}
                    </Stack>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <NavButtons navItems={navItems} isHomePage={isHomePage} handleContactClick={handleContactClick} />
            <Box sx={{ position: 'absolute', right: 24 }}>
              <NavToggles mode={mode} toggleTheme={toggleTheme} languages={languages} i18n={i18n} />
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
