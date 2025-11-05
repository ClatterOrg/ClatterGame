import { Box, Container, Typography, Button } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { Helmet } from 'react-helmet-async'

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Clatter</title>
        <meta name="description" content="Privacy Policy for Clatter game" />
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
            Privacy Policy
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
              1. Information We Collect
            </Typography>
            <Typography variant="body1" paragraph>
              We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography component="li" variant="body1" paragraph>
                Name and contact information
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                Payment information (processed securely through third-party payment processors)
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                Gameplay data and preferences
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                Technical information (IP address, browser type, device information)
              </Typography>
            </Box>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              2. How We Use Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              We use the information we collect to:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography component="li" variant="body1" paragraph>
                Provide, maintain, and improve our services
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                Process transactions and send related information
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                Send technical notices, updates, and support messages
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                Respond to your comments and questions
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                Monitor and analyze trends, usage, and activities
              </Typography>
            </Box>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              3. Information Sharing
            </Typography>
            <Typography variant="body1" paragraph>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography component="li" variant="body1" paragraph>
                With your consent
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                To comply with legal obligations
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                To protect and defend our rights or property
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                With service providers who assist us in operating our services (under strict confidentiality agreements)
              </Typography>
            </Box>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              4. Data Security
            </Typography>
            <Typography variant="body1" paragraph>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              5. Cookies and Tracking Technologies
            </Typography>
            <Typography variant="body1" paragraph>
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              6. Your Rights
            </Typography>
            <Typography variant="body1" paragraph>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 2 }}>
              <Typography component="li" variant="body1" paragraph>
                The right to access your personal information
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                The right to rectify inaccurate information
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                The right to erase your personal information
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                The right to restrict processing of your information
              </Typography>
              <Typography component="li" variant="body1" paragraph>
                The right to data portability
              </Typography>
            </Box>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              7. Children's Privacy
            </Typography>
            <Typography variant="body1" paragraph>
              Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              8. Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </Typography>

            <Typography variant="h5" component="h2" sx={{ color: '#FFFFFF', mb: 2, mt: 4 }}>
              9. Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions about this Privacy Policy, please contact us through our website or support channels.
            </Typography>

            <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}>
              <Typography variant="body2" color="text.secondary">
                This Privacy Policy is effective as of the date stated above and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default PrivacyPolicy

