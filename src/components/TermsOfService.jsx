import { Box, Container, Typography, Button } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { Helmet } from 'react-helmet-async'

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Clatter</title>
        <meta name="description" content="Terms of Service for Clatter game" />
      </Helmet>
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          py: { xs: 6, md: 8 },
          background: 'linear-gradient(135deg, rgba(10, 0, 20, 0.95) 0%, rgba(20, 0, 40, 0.95) 100%)',
        }}
      >
        <Container maxWidth="md">
          <Button
            href="/"
            startIcon={<ArrowBack />}
            sx={{
              mb: 4,
              color: 'text.secondary',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            Back to Home
          </Button>

          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              color: '#FFFFFF',
              fontWeight: 700,
              mb: 4,
            }}
          >
            Terms of Service
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>

          <Box sx={{ color: 'text.secondary', '& > *': { mb: 3 } }}>
            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" paragraph>
              By accessing and using Clatter, you accept and agree to be bound by the terms and provision of this agreement.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              2. Use License
            </Typography>
            <Typography variant="body1" paragraph>
              Permission is granted to temporarily use Clatter for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography component="li" variant="body1" paragraph>
                modify or copy the materials;
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                attempt to decompile or reverse engineer any software contained in Clatter;
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                remove any copyright or other proprietary notations from the materials.
              </Typography>
            </Box>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              3. Disclaimer
            </Typography>
            <Typography variant="body1" paragraph>
              The materials on Clatter are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              4. Limitations
            </Typography>
            <Typography variant="body1" paragraph>
              In no event shall Clatter or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Clatter, even if Clatter or a Clatter authorized representative has been notified orally or in writing of the possibility of such damage.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              5. Accuracy of Materials
            </Typography>
            <Typography variant="body1" paragraph>
              The materials appearing on Clatter could include technical, typographical, or photographic errors. Clatter does not warrant that any of the materials on its website are accurate, complete, or current. Clatter may make changes to the materials contained on its website at any time without notice.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              6. Links
            </Typography>
            <Typography variant="body1" paragraph>
              Clatter has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Clatter of the site. Use of any such linked website is at the user's own risk.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              7. Modifications
            </Typography>
            <Typography variant="body1" paragraph>
              Clatter may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              8. Governing Law
            </Typography>
            <Typography variant="body1" paragraph>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </Typography>

            <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography variant="body2" color="text.secondary">
                If you have any questions about these Terms of Service, please contact us.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default TermsOfService

