import { Box, Container, Stack, Typography, IconButton, Tooltip, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme } from '@mui/material/styles';

import { GitHubDark, GitHubLight, LinkedIn, Twitter as TwitterIcon, Gmail } from 'developer-icons';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const GitHubIcon = isDark ? GitHubLight : GitHubDark;

  return (
    <Box component="section" id="contact" py={8} textAlign="center">
      <Container maxWidth="sm">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {t('contact.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          {t('contact.subtitle')}
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center" mb={4}>
          <Tooltip title="Email">
            <IconButton href="mailto:kisbalazsdome@gmail.com" target="_blank" rel="noopener noreferrer" size="large">
              <Gmail style={{ width: 28, height: 28 }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="GitHub">
            <IconButton href="https://github.com/dkisb" target="_blank" rel="noopener noreferrer" size="large">
              <GitHubIcon style={{ width: 28, height: 28 }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="LinkedIn">
            <IconButton
              href="https://linkedin.com/in/döme-marcell-kisbalázs/"
              target="_blank"
              rel="noopener noreferrer"
              size="large"
            >
              <LinkedIn style={{ width: 28, height: 28 }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Twitter">
            <IconButton href="https://x.com/domekisb" target="_blank" rel="noopener noreferrer" size="large">
              <TwitterIcon style={{ width: 28, height: 28 }} />
            </IconButton>
          </Tooltip>
        </Stack>
        <Button variant="contained" startIcon={<DownloadIcon />} href="/cv.pdf" download>
          {t('contact.downloadCv')}
        </Button>
      </Container>
    </Box>
  );
}
