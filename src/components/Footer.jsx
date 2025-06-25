import { Box, Container, Typography, Stack, IconButton, Divider, Link as MuiLink } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '@mui/material/styles';
import { Twitter, GitHubLight, GitHubDark, LinkedIn, Gmail } from 'developer-icons';
import { useTranslation } from 'react-i18next';
import lightLogo from '../assets/logo-light.svg';
import darkLogo from '../assets/logo-dark.svg';

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { t } = useTranslation();
  const location = useLocation(); // Get current route

  const GitHubIcon = isDark ? GitHubLight : GitHubDark;
  const LogoIcon = isDark ? darkLogo : lightLogo;

  const navItems = [
    { text: t('footer.home'), section: 'hero', route: '/', offset: 0 },
    { text: t('footer.about'), section: 'about', route: '/about', offset: 0 },
    { text: t('footer.projects'), section: 'projects', route: '/projects', offset: 0 },
    { text: t('footer.contact'), section: '/contact', route: '/contact', isExternal: true },
  ];

  // Check if we're on the home page to use react-scroll
  const isHomePage = location.pathname === '/';

  return (
    <Box component="footer" bgcolor="background.paper" py={6} mt={10}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="flex-start"
          gap={6}
          mb={4}
        >
          {/* Logo Section - always on the left, responsive width */}
          <Box
            flexBasis={{ xs: '100%', md: '25%' }}
            flexShrink={0}
            flexGrow={0}
            display="flex"
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            mb={{ xs: 3, md: 0 }}
            sx={{ minWidth: 0 }}
          >
            <Box
              component="img"
              src={LogoIcon}
              alt="Logo"
              sx={{
                width: { xs: 180, sm: 210, md: 220, lg: 240 },
                maxWidth: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>

          {/* Explore Section */}
          <Box flex={{ xs: '1 1 0%', md: '1 1 0%' }} textAlign={{ xs: 'center', md: 'left' }} minWidth={0}>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              {t('footer.explore')}
            </Typography>
            <Stack spacing={1}>
              {navItems.map(({ text, section, route, isExternal, offset }) => (
                <MuiLink
                  key={text}
                  component={isExternal || !isHomePage ? RouterLink : ScrollLink}
                  {...(isExternal || !isHomePage
                    ? { to: route }
                    : { to: section, spy: true, smooth: true, duration: 500, offset })}
                  color="text.primary"
                  underline="hover"
                >
                  {text}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* Connect Section */}
          <Box flex={{ xs: '1 1 0%', md: '1 1 0%' }} textAlign={{ xs: 'center', md: 'left' }} minWidth={0}>
            <Typography variant="h6" fontWeight="bold" mb={1}>
              {t('footer.connect')}
            </Typography>
            <Stack direction="column" spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <IconButton
                href="mailto:kisbalazsdome@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                sx={{ p: 0 }}
              >
                <Gmail style={{ width: 28, height: 28 }} />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/döme-marcell-kisbalázs/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                sx={{ p: 0 }}
              >
                <LinkedIn style={{ width: 28, height: 28 }} />
              </IconButton>
              <IconButton
                href="https://github.com/dkisb"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                sx={{ p: 0 }}
              >
                <GitHubIcon style={{ width: 28, height: 28 }} />
              </IconButton>
              <IconButton
                href="https://x.com/domekisb"
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
                sx={{ p: 0 }}
              >
                <Twitter style={{ width: 28, height: 28 }} />
              </IconButton>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} – {t('footer.rights')}
        </Typography>
      </Container>
    </Box>
  );
}
