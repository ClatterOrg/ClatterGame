import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const requirements = [
  { category: 'OS', minimum: 'Windows 10', recommended: 'Windows 11' },
  { category: 'Processor', minimum: 'Intel Core i3', recommended: 'Intel Core i5 or AMD equivalent' },
  { category: 'Memory', minimum: '4 GB RAM', recommended: '8 GB RAM' },
  { category: 'Graphics', minimum: 'DirectX 11 compatible', recommended: 'DirectX 12 compatible' },
  { category: 'Storage', minimum: '2 GB available space', recommended: '5 GB available space' },
]

const SystemRequirements = () => {
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
      <Container maxWidth="md">
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
            System Requirements
          </Typography>
          <TableContainer component={Paper} sx={{ bgcolor: 'background.default' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Component</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    <Chip label="Minimum" size="small" color="warning" />
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>
                    <Chip label="Recommended" size="small" color="success" />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requirements.map((req, index) => (
                  <TableRow
                    key={index}
                    component={motion.tr}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <TableCell component="th" scope="row" sx={{ fontWeight: 600 }}>
                      {req.category}
                    </TableCell>
                    <TableCell align="center">{req.minimum}</TableCell>
                    <TableCell align="center">{req.recommended}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>
      </Container>
    </Box>
  )
}

export default SystemRequirements

