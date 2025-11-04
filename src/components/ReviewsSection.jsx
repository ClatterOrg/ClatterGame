import { Box, Container, Typography, Card, CardContent, Grid, Rating } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const reviews = [
  {
    quote: 'A refreshing take on dice games with strategic depth.',
    author: 'Gaming Weekly',
    rating: 5,
  },
  {
    quote: 'Innovative mechanics that keep you coming back for more.',
    author: 'Game Reviewer',
    rating: 5,
  },
  {
    quote: 'The perfect blend of luck and strategy.',
    author: 'Strategy Game Enthusiast',
    rating: 4,
  },
]

const ReviewsSection = () => {
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
        bgcolor: 'background.default',
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
            What Players Are Saying
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {reviews.map((review, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Rating value={review.rating} readOnly sx={{ mb: 2 }} />
                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                      "{review.quote}"
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      — {review.author}
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

export default ReviewsSection

