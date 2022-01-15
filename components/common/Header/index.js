import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Image from 'next/image'
import Link from 'next/link'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Avatar from '@mui/material/Avatar'
import { useSelector } from 'react-redux'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Logout from '@mui/icons-material/Logout'
import { auth, signOut } from '../../../app/firebase'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'
import { authCheck } from '@features/user/userSlice'

function Index () {
  const router = useRouter()
  const dispatch = useDispatch()
  const handleSignOut = () => {
    signOut(auth)
      .then(e => {
        const userData = {
          accessToken: null, // access token
          uid: null, // user id
          email: null, // user email
          displayName: null, // user display name
          photoURL: null, // user photo url
          phoneNumber: null // user phone number
        }
        dispatch(authCheck(userData))

        //router.reload()
      })
      .catch(error => {
        // An error happened.
      })
  }
  let user = useSelector(state => state.user)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <header>
      <section className='container'>
        <nav className='navbar'>
          <Link href={'/'}>
            <a>
              <Image
                src='/logo.png'
                alt='Picture of the author'
                width={128}
                height={51}
              />
            </a>
          </Link>
          <ul className='navbar-nav d-none d-md-flex'>
            {headerMenu?.map((menu, i) => (
              <li key={i}>
                <Link href={menu.link}>
                  <a>{menu.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className='login_like'>
            <FavoriteBorderIcon />
            {user.accessToken ? (
              <Avatar
                className='avatar_css'
                id='demo-positioned-button'
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                src={user?.photoURL}
              >
                {user?.email?.slice(0, 1)}
              </Avatar>
            ) : (
              <Link href={'/auth/login'}>
                <a>
                  <button>Login</button>
                </a>
              </Link>
            )}
            <Menu
              anchorEl={anchorEl}
              id='account-menu'
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0
                  }
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <Avatar src={user?.photoURL}>
                  {user?.email?.slice(0, 1).toUpperCase()}
                </Avatar>{' '}
                Profile
              </MenuItem>
              <MenuItem onClick={() => handleSignOut()}>
                <ListItemIcon>
                  <Logout fontSize='small' />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </nav>
      </section>
    </header>
  )
}
const headerMenu = [
  { title: 'Buy', link: '/' },
  { title: 'Sell', link: '/about' },
  { title: 'Rent', link: '/contact' },
  { title: 'Property Services', link: '/' },
  { title: 'About Us', link: '/about' },
  { title: 'Contact Us', link: '/contact' }
]
export default Index
