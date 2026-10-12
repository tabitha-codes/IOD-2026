import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

// one list of links: add a page here, and the navbar updates automatically
const links = [
  { to: '/', label: 'Home' },
  { to: '/login', label: 'Login' },
  { to: '/bitcoin', label: 'Bitcoin Rates' },
]

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar component="nav" aria-label="Main navigation">
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {links.map(link => (
            <Button
              key={link.to}
              component={NavLink}      // MUI Button renders as a React Router NavLink
              to={link.to}
              end={link.to === '/'}
              color="inherit"
              sx={{ '&.active': { borderBottom: '2px solid currentColor', borderRadius: 0 } }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar