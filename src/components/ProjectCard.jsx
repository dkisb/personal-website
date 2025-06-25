import { useState } from 'react';
import { Card, CardActionArea, CardContent, Typography, Chip, Box, Stack } from '@mui/material';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const ProjectCard = ({ title, image, description, tech, github, demo, isNew }) => {
  const [tags, setTags] = useState(tech);

  const handleCardClick = () => {
    window.open(demo || github, '_blank');
  };

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 400,
        mx: 'auto',
        height: 420,
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.02)' },
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={handleCardClick}
      elevation={3}
    >
      <CardActionArea>
        <Box
          sx={{
            height: 160,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        />

        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Typography variant="h6" component="div" fontWeight={600}>
              {title}
            </Typography>
            {isNew && <Chip label="NEW" color="secondary" size="small" icon={<NewReleasesIcon fontSize="small" />} />}
          </Box>

          <Typography variant="body2" color="text.secondary" mb={2}>
            {description}
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            {tags.map((Icon, i) => (
              <Box
                key={i}
                onClick={(e) => e.stopPropagation()}
                sx={{
                  p: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'background.paper',
                  borderRadius: 1,
                  boxShadow: 1,
                  width: 32,
                  height: 32,
                }}
              >
                <Icon style={{ width: 20, height: 20 }} />
              </Box>
            ))}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
