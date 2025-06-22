import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  useMediaQuery,
  useTheme,
  Divider,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTranslation } from 'react-i18next';

export default function Navbar({ toggleTheme, mode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'en', flag: '/en.svg' },
    { code: 'de', flag: '/de.svg' },
    { code: 'hu', flag: '/hu.svg' },
  ];

  const langCode = (i18n.language || 'en').split('-')[0];
  const currentLang = languages.find((l) => l.code === langCode) || languages[0];
  const otherLanguages = languages.filter((l) => l.code !== i18n.language);
  const navItems = [
    { text: t('navbar.home'), path: '/' },
    { text: t('navbar.about'), path: '/about' },
    { text: t('navbar.projects'), path: '/projects' },
    { text: t('navbar.contact'), path: '/contact' },
  ];

  const handleLangClick = (event) => setAnchorEl(event.currentTarget);
  const handleLangClose = () => setAnchorEl(null);
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    handleLangClose();
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
          height: 80,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 3,
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.6)' : 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Centered Nav Items */}
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
                  {navItems.map(({ text, path }) => (
                    <ListItem key={text} disablePadding>
                      <ListItemText
                        primary={
                          <RouterLink to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
                            {text}
                          </RouterLink>
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
          <Stack direction="row" spacing={3} alignItems="center">
            {navItems.map(({ text, path }) => (
              <Button
                key={text}
                component={RouterLink}
                to={path}
                color="inherit"
                variant="contained"
                sx={{
                  fontWeight: 700,
                  textTransform: 'none',
                  borderRadius: 5,
                  px: 3,
                  py: 1,
                  fontSize: '1rem',
                }}
              >
                {text}
              </Button>
            ))}
          </Stack>
        )}

        {/* Right: Language + Dark Mode */}
        {!isMobile && (
          <Stack direction="row" spacing={1} alignItems="center" sx={{ position: 'absolute', right: 24 }}>
            {/* Language Dropdown */}
            <IconButton onClick={handleLangClick}>
              <Box
                component="img"
                src={currentLang.flag}
                alt={currentLang.code}
                sx={{ width: 24, height: 24, borderRadius: '50%' }}
              />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleLangClose}>
              {otherLanguages.map(({ code, flag }) => (
                <MenuItem key={code} onClick={() => changeLanguage(code)}>
                  <Box
                    component="img"
                    src={flag}
                    alt={code}
                    sx={{ width: 24, height: 24, borderRadius: '50%', mr: 1 }}
                  />
                  {code.toUpperCase()}
                </MenuItem>
              ))}
            </Menu>

            {/* Dark Mode Toggle */}
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Stack>
        )}
      </Box>
    </>
  );
}
