import { Box, IconButton, Tooltip } from '@mui/material'
import { Twitter, Facebook, Instagram, GitHub, Forum } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const socialLinks = [
  { name: 'Twitter', icon: Twitter, url: '#' },
  { name: 'Discord', icon: Forum, url: '#' }, // Using Forum icon as Discord isn't available in MUI
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'GitHub', icon: GitHub, url: '#' },
]

const SocialLinks = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        gap: { xs: 1.5, sm: 2 },
        justifyContent: 'center',
        flexWrap: 'wrap',
        px: { xs: 2, sm: 0 },
      }}
    >
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.name}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Tooltip title={social.name} arrow>
            <Box
              sx={{
                position: 'relative',
                width: { xs: 48, sm: 56 },
                height: { xs: 48, sm: 56 },
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF00FF, #00FFFF)',
                padding: '2px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 0 15px rgba(255, 0, 255, 0.4)',
                '&:hover': {
                  boxShadow: '0 0 30px rgba(255, 0, 255, 0.8), 0 0 50px rgba(0, 255, 255, 0.6)',
                  background: 'linear-gradient(135deg, #00FFFF, #FF00FF)',
                },
              }}
            >
              <IconButton
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                sx={{
                  color: 'text.secondary',
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.8)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: 'inset 0 0 10px rgba(0, 255, 255, 0.1)',
                  '&:hover': {
                    color: '#00FFFF',
                    background: 'rgba(0, 255, 255, 0.15)',
                    boxShadow: 'inset 0 0 20px rgba(157, 0, 255, 0.3)',
                  },
                }}
              >
                <social.icon sx={{ fontSize: { xs: 24, sm: 28 } }} />
              </IconButton>
            </Box>
          </Tooltip>
        </motion.div>
      ))}
    </Box>
  )
}

export default SocialLinks

