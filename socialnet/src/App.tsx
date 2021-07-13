import React from 'react';
import './App.css';
import { Container, Grid, AppBar, Toolbar, IconButton, Typography,
   Button, Box, Paper} from '@material-ui/core';
import { HeaderPage } from './components/Header/HeaderPage';
import { Navbar } from './components/Navbar/Navbar';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {flexGrow:1},
  menuButton: {
    marginRight: theme.spacing(1)
  },
  toolbar:{
    backgroundColor:"#117B80",
  },
  title: {
    flexGrow:1
  },
  mainFeaturesPost:{
    position: "relative",
    color: theme.palette.common.white,
    marginBottom:theme.spacing(4),
    backgroundSize: "cover",
    backgroungRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturesPostContent:{
    position: "relative",
    padding: theme.spacing(6),
    marginTop:theme.spacing(8)
  }
})) 

function App() {

  const s = useStyles()
  return (
    <>
    <AppBar position="fixed"className={s.toolbar}>
      <Container  fixed>
        <Toolbar  >
          <IconButton edge="start" color="inherit" 
          aria-label="menu" className={s.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography className={s.title} >Profile</Typography>
          <Typography className={s.title}>Messages</Typography>
          <Typography className={s.title}>News</Typography>
          <Typography className={s.title}>Settings</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Log In</Button>
          </Box>
          <Button color="secondary" variant="contained">Sign Up</Button>
        </Toolbar>
      </Container>
    </AppBar>

    <main>
      <Paper className={s.mainFeaturesPost} style={{backgroundImage:`url(https://source.unsplash.com/random)`}}>
        <Container fixed>
          <Grid container>
            <Grid item md={6}>
              <div className={s.mainFeaturesPostContent}>
                <Typography component="h1" color="inherit" variant="h3" gutterBottom>
                  Social Net Project
                </Typography>
                

              </div>

          </Grid>
          </Grid>
        </Container>
      </Paper>
    </main>
    </>
  );
}

export default App;
