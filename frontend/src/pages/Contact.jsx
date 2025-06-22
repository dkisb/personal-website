import { Box, Container } from '@mui/material';
import Contact from '../components/Contact';

const ContactPage = () => (
  <Box py={8}>
    <Container maxWidth="sm">
      <Contact />
    </Container>
  </Box>
);

export default ContactPage;
