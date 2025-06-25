import { Box, Container } from '@mui/material';
import Contact from '../components/Contact';
import { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box py={8}>
      <Container maxWidth="sm">
        <Contact />
      </Container>
    </Box>
  );
};

export default ContactPage;
