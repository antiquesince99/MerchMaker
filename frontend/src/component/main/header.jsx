import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
// import { makeStyles } from '@mui/material';

// import styled from '@emotion/styled/types/base';
// import Box from '@mui/material/Box';

const pages = [
  {
    name : 'Home',
    link: '/main/home'
  },
  {
    name : 'Login',
    link: '/main/login'
  },
  {
    name : 'Signup',
    link: '/main/signup'
  },
  {
    name : 'Customizer',
    link: '/main/customizer'
  }
];

const Header = () => {
  // const classes = useStyle();  
  
  const navigate = useNavigate();

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="">
      <Toolbar style={{display : 'flex' , justifyContent: "space-between" , alignItems: "center"}}>
        <Typography variant="h5">MerchMaker</Typography>
        <div style={{display: 'flex', justifyContent: "space-evenly", width: "20%"}}>
          {pages.map((page)=>(<Button variant='contained' onClick={e => navigate(page.link)} style={{marginRight:"2rem"}}>{page.name}</Button>))}
        </div>
        <div>profile</div>
      </Toolbar>
      </Container>
    </AppBar>
    </>
  )
};

export default Header;
