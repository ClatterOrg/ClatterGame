import { Box, IconButton, Tooltip } from '@mui/material'
import { Twitter, Facebook, Instagram, GitHub, Forum } from '@mui/icons-material'

const socialLinks = [
  { name: 'Twitter', icon: Twitter, url: '#' },
  { name: 'Discord', icon: Forum, url: '#' }, // Using Forum icon as Discord isn't available in MUI
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'GitHub', icon: GitHub, url: '#' },
]

const SocialLinks = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {socialLinks.map((social) => (
        <Tooltip key={social.name} title={social.name}>
          <IconButton
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'primary.main',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.2s',
            }}
          >
            <social.icon />
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  )
}

export default SocialLinks

