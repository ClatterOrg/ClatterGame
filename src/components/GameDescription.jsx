import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Strategic Dice Gameplay',
    description: 'Master the art of dice manipulation and strategic planning.',
  },
  {
    title: 'Unique Mechanics',
    description: 'Experience innovative gameplay that sets Clatter apart.',
  },
  {
    title: 'Immersive Experience',
    description: 'Dive into a world where every roll matters.',
  },
]

const GameDescription = () => {
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
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ textAlign: 'center', mb: 6 }}
          >
            About Clatter
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.25rem',
              textAlign: 'center',
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              color: 'text.secondary',
            }}
          >
            Clatter is an innovative dice-based strategy game that challenges players to think
            strategically while managing chance. Roll, plan, and outmaneuver your opponents in this
            unique gaming experience.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'background.default',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default GameDescription

