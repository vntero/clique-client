import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import {UserContext} from '../context/app.context'
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {user} = useContext(UserContext)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: 'white', color: 'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link style={{textDecoration: 'none'}} to="/">{<img width='40' height='40' src="click.png"/>}</Link>
          </Typography>

          {
            user ? (
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem>
                  <Link style={{textDecoration: 'none', color: 'black'}} to="/groups"><Typography textAlign="center">Groups</Typography></Link>
                </MenuItem>

                <MenuItem>
                <Link style={{textDecoration: 'none', color: 'black'}} to="/events"><Typography textAlign="center">Events</Typography></Link>
                </MenuItem>
              
            </Menu>
          </Box>
       
            ) : (<></>)
          }

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link style={{textDecoration: 'none', color: 'black'}} to="/">{<img width='40' height='40' src="click.png"/>}</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {
                user ? (
                  <>
                  <Link style={{textDecoration: 'none', color: 'white'}} to="/groups"><Button sx={{ my: 1, color: 'black', display: 'block', textTransform: 'lowercase' }}>Groups</Button></Link>
                  <Link style={{textDecoration: 'none', color: 'white'}} to="/events"><Button sx={{ my: 1, color: 'black', display: 'block', textTransform: 'lowercase' }}>Events</Button></Link>
                  </>
                ) : (<></>)
              }
          </Box>
          
          
          { 
            user ? (
  
  <Box sx={{ flexGrow: 0 }}>
              
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Ironhacker" src="cristiano.jpeg" />
                </IconButton>
              
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
        
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/profile"><Typography textAlign="center">Profile</Typography></Link>
                  </MenuItem>
                  
                  <MenuItem>
                    <Typography textAlign="center" onClick={props.onLogout}>Sign Out</Typography>
                  </MenuItem>
              
              </Menu>
              </Box>
  
            ) : (
              
              <>
              <Link style={{textDecoration: 'none', color: 'white'}} to="/signin"><Button style={{textTransform: 'lowercase'}}>Sign In</Button></Link>
              <p>|</p>
              <Link style={{textDecoration: 'none', color: 'white'}} to="/signup"><Button style={{textTransform: 'lowercase'}}>Register</Button></Link>
              </>
            )
          }
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;















// export default function Navbar(props) {

//   const {user} = useContext(UserContext)

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             clique
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <Button variant="contained">Groups</Button>
//             <Button variant="contained">Events</Button>
//             <Button variant="contained">Your account</Button>
//           </Typography>
            // {
            //   user ? (
                
            //     <Button variant="contained" onClick={props.onLogout}>Logout</Button>
            //   ) : (
            //     <>
            //     <Link  style={{marginLeft: '10px'}}  to="/signin">SignIn</Link>
            //     <Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link>
            //     </>
            //   )
            // }
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }


