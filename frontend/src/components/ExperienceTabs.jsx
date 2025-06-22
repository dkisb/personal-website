import { useState } from 'react';
import { Box, Container, Tabs, Tab, Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ExperienceTabs() {
  const [activeTab, setActiveTab] = useState('education');
  const { t } = useTranslation();

  const handleTabChange = (_, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box py={10}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          {t('experience.title')}
        </Typography>

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          textColor="primary"
          indicatorColor="primary"
          sx={{ mb: 4 }}
        >
          <Tab label={t('experience.tabs.education')} value="education" />
          <Tab label={t('experience.tabs.work')} value="work" />
        </Tabs>

        {activeTab === 'education' && (
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" fontWeight="600">
              {t('experience.education.title')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('experience.education.institution')}
            </Typography>
            <Typography variant="body1" mt={2}>
              {t('experience.education.description')}
            </Typography>
          </Paper>
        )}

        {activeTab === 'work' && (
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" fontWeight="600">
              {t('experience.work.title')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {t('experience.work.company')}
            </Typography>
            <Typography variant="body1" mt={2}>
              {t('experience.work.description')}
            </Typography>
          </Paper>
        )}
      </Container>
    </Box>
  );
}
