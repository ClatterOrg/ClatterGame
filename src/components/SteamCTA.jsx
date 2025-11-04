import { Box, Container, Typography, Button, Stack } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { PlayArrow, AddShoppingCart } from '@mui/icons-material'

const SteamCTA = ({ steamUrl, price }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h2" gutterBottom>
              Ready to Play?
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom sx={{ mb: 4 }}>
              {price && `Available for ${price}`}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              {steamUrl && (
                <Button
                  variant="contained"
                  size="large"
                  href={steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<AddShoppingCart />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    bgcolor: '#171a21',
                    color: '#66c0f4',
                    '&:hover': {
                      bgcolor: '#1b2838',
                    },
                  }}
                >
                  Buy on Steam
                </Button>
              )}
              {steamUrl && (
                <Button
                  variant="outlined"
                  size="large"
                  href={steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<PlayArrow />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderColor: '#66c0f4',
                    color: '#66c0f4',
                    '&:hover': {
                      borderColor: '#66c0f4',
                      bgcolor: 'rgba(102, 192, 244, 0.1)',
                    },
                  }}
                >
                  Wishlist
                </Button>
              )}
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default SteamCTA

