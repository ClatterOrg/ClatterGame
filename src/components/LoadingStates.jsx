import { Box, CircularProgress, Typography } from '@mui/material'

const LoadingStates = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        gap: 2,
      }}
    >
      <CircularProgress size={60} thickness={4} />
      <Typography variant="body1" color="text.secondary">
        Loading game...
      </Typography>
    </Box>
  )
}

export default LoadingStates

