import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { ThemeProvider, useTheme } from '@mui/material/styles'
import { border } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import orcasoundlogo from '../../public/images/orcasoundlogo.png'
import wavyline from '../../public/images/wavyline.png'
import useIsMobile from '../utils/useIsMobile'

const navLinks = [
  {
    name: 'Get Involved',
    url: '/getinvolved',
    icon: '',
  },
  {
    name: 'Learn',
    url: '/learn',
    icon: '',
  },
  {
    name: 'About Us',
    url: '/about',
    icon: '',
  },
  {
    name: 'Listen',
    url: '/listen',
    icon: '',
  },
  {
    name: 'Blog',
    url: '/blog',
    icon: '',
  },
  {
    name: 'Send Feedback',
    url: '/',
    icon: '',
  },
]

const Nav = () => {
  const theme = useTheme()
  const isMobile = useIsMobile()

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        {isMobile ? (
          <Container maxWidth="xl" sx={{ display: 'flex', gap: '3rem' }}>
            {isMobile ? <Mobile /> : <Desktop />}
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    backgroundColor: 'white',
                    width: '69px',
                    height: '66px',
                    margin: '10px',
                    borderRadius: '100px',
                  }}
                >
                  <Link href="/" passHref>
                    <Box
                      component="a"
                      sx={{
                        width: '60px',
                        height: '44px',
                        top: '20px',
                        left: '15px',
                        borderRadius: '100px',
                        position: 'absolute',
                      }}
                    >
                      <Image
                        src={orcasoundlogo}
                        alt="Orcasound"
                        width={90}
                        height={70}
                      />
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        ) : (
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    backgroundColor: 'white',
                    width: '69px',
                    height: '66px',
                    margin: '10px',
                    borderRadius: '100px',
                  }}
                >
                  <Link href="/" passHref>
                    <Box
                      component="a"
                      sx={{
                        width: '60px',
                        height: '44px',
                        top: '20px',
                        left: '15px',
                        borderRadius: '100px',
                        position: 'absolute',
                      }}
                    >
                      <Image
                        src={orcasoundlogo}
                        alt="Orcasound"
                        width={90}
                        height={70}
                      />
                    </Box>
                  </Link>
                </Box>
              </Box>
              {isMobile ? <Mobile /> : <Desktop />}
            </Toolbar>
          </Container>
        )}
      </AppBar>
    </ThemeProvider>
  )
}
export default Nav

function Mobile() {
  const [menuIsOpen, setMenuOpen] = useState(false)
  const handleMenuToggle = () => {
    setMenuOpen(!menuIsOpen)
  }

  const list = (
    <Box
      sx={{ backgroundColor: 'white' }}
      onClick={handleMenuToggle}
      onKeyDown={handleMenuToggle}
    >
      <List
        sx={{
          width: '238px',
          border: '1px solid',
          color: 'white',
          backgroundColor: 'black',
        }}
      >
        {navLinks.map((navLink) => (
          <Link key={navLink.name} href={navLink.url} passHref>
            <ListItem
              button
              sx={{
                borderBottom: '1px solid rgba(217, 217, 217, 0.5)',
                ':hover': {
                  textDecoration: 'rgba(0, 139, 223, 1) wavy underline',
                },
              }}
            >
              <ListItemText primary={navLink.name} />
            </ListItem>
          </Link>
        ))}
        <Link href="/" passHref>
          <ListItem
            button
            sx={{
              borderBottom: '1px solid rgba(217, 217, 217, 0.5)',
              ':hover': {
                textDecoration: 'rgba(0, 139, 223, 1) wavy underline',
              },
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ background: 'none', marginLeft: '-10px' }}>
                <NotificationsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText sx={{ marginLeft: '-25px' }} primary="Notify Me" />
          </ListItem>
        </Link>
        <Link href="/donate" passHref>
          <ListItem
            button
            sx={{
              ':hover': {
                textDecoration: 'rgba(0, 139, 223, 1) wavy underline',
              },
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ background: 'none', marginLeft: '-10px' }}>
                <VolunteerActivismIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText sx={{ marginLeft: '-25px' }} primary="Support" />
          </ListItem>
        </Link>
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: { xs: 'flex', sm: 'none', gap: '1rem' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenuToggle}
        color="inherit"
        sx={{
          position: 'fixed',
          marginTop: '1rem',
          ':hover': {
            backgroundColor: 'rgba(217, 217, 217, 0.5)',
            borderRadius: '50%',
            height: '50px',
            width: '50px',
          },
        }}
      >
        {menuIsOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer
        anchor="top"
        open={menuIsOpen}
        onClose={handleMenuToggle}
        sx={{ display: { xs: 'flex', sm: 'none' } }}
      >
        <Toolbar sx={{ height: '80px' }} />
        {list}
      </Drawer>
    </Box>
  )
}

function Desktop() {
  const theme = useTheme()

  return (
    <React.Fragment>
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 0.1 }}>
        {navLinks.map((navLink) => (
          <Button
            key={navLink.name}
            sx={{
              m: 2,
              color: 'white',
              display: 'block',
              textTransform: 'none',
            }}
          >
            <Link href={navLink.url} passHref>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  color: 'white',
                  '&:hover': {
                    textDecoration: 'none',
                    color: 'white',
                  },
                }}
              >
                {navLink.name}
              </Typography>
            </Link>
          </Button>
        ))}
      </Box>
      <Button
        variant="contained"
        sx={{
          color: 'black',
          backgroundColor: 'white',
          borderRadius: '100px',
          '&:hover': { color: 'black', backgroundColor: 'white' },
          display: { xs: 'none', sm: 'flex' },
        }}
        startIcon={
          <NotificationsIcon
            sx={{ color: `${theme.palette.secondary.main}` }}
          />
        }
      >
        Notify Me
      </Button>
    </React.Fragment>
  )
}
