import React from 'react'
import {AppBar, Button, Toolbar, Typography, Link} from '@mui/material';
import { useNavigate, NavLink } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();

    // When user click on button it will redirect to that page
    const handleClick = (location) => {
        // console.log(location);
        navigate(location);
    }

  return (
    <AppBar position="fixed">
        <Toolbar>
            <Typography onClick={() => handleClick("/")} variant='h6' sx={{flexGrow: 1}}> YourHR </Typography> 
            <Button color="inherit" onClick={() => handleClick("/login")}>Login</Button>
            <Button color="inherit"onClick={() => handleClick("/registration")}>Registration</Button>
            {/* <Button color="inherit"><NavLink to={/register}>Registration</NavLink></Button> */}
        </Toolbar>
    </AppBar>
  )
}

export default Header
