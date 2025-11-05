import { Box, Container, Typography, Link, Grid } from '@mui/material'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 0, 20, 0.95) 100%)',
        borderTop: '1px solid',
        borderColor: 'rgba(255, 0, 255, 0.2)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 4 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
              Clatter
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '0.875rem' } }}>
              An innovative dice-based strategy game
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
              Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/privacy" color="text.secondary" underline="hover" sx={{ fontSize: { xs: '0.875rem', sm: '0.875rem' } }}>
                Privacy Policy
              </Link>
              <Link href="/terms" color="text.secondary" underline="hover" sx={{ fontSize: { xs: '0.875rem', sm: '0.875rem' } }}>
                Terms of Service
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
              Connect
            </Typography>
            <SocialLinks />
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Clatter. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

