import React from 'react';
import './App.css';
import { Container, Grid, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { HeaderPage } from './components/Header/HeaderPage';
import { Navbar } from './components/Navbar/Navbar';
import MenuIcon from '@material-ui/icons/Menu';


function App() {
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon/>
            <Typography></Typography>
          </IconButton>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
