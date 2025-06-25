import { Box, Typography, Grid, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { techStacks as rawTechStacks } from '../data/techstacks';

const TechStack = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const techStacks = rawTechStacks.map((stack) => {
    const { Icon } = stack;
    const resolvedIcon = typeof Icon === 'object' ? (isDark ? Icon.dark : Icon.light) : Icon;
    return { ...stack, Icon: resolvedIcon };
  });

  return (
    <Box textAlign="center" mt={6}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Tech Stack
      </Typography>

      <Grid container spacing={2} columns={{ xs: 6, sm: 8, md: 12 }} justifyContent="center">
        {techStacks.map(({ name, Icon }, index) => (
          <Grid key={index} gridColumn={{ xs: 'span 3', sm: 'span 2', md: 'span 2' }}>
            <Paper
              elevation={1}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                p: 2,
                height: '100%',
                borderRadius: 2,
              }}
            >
              <Icon style={{ width: 28, height: 28 }} />
              <Typography variant="body2" fontWeight={500} textAlign="center">
                {name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TechStack;
