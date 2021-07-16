import React from "react";
import { Container, Grid, AppBar, Toolbar, IconButton, Typography,
    Button, Box, Paper,Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from '../../AppCss';
import { NavLink } from "react-router-dom";

type HeaderProps = {

}

export function Header () {
    const s = useStyles()
    return (<div>
         <AppBar position="fixed" className={s.toolbar}>
            <Container maxWidth="xl">
              <Toolbar  >
                <IconButton edge="start" color="inherit"
                  aria-label="menu" className={s.menuButton}>
                  <MenuIcon />
                </IconButton>
                <Typography className={s.title}><NavLink className={s.navLink} to="/profile">Profile</NavLink></Typography>
                <Typography className={s.title}><NavLink className={s.navLink} to="/dialogs">Dialogs</NavLink></Typography>
                <Typography className={s.title}><NavLink className={s.navLink} to="/news">News</NavLink></Typography>
                <Typography className={s.title}>Settings</Typography>
                <Box mr={3}>
                  <Button color="inherit" variant="outlined">Log In</Button>
                </Box>
                <Button color="secondary" variant="contained">Sign Up</Button>
              </Toolbar>
            </Container>
          </AppBar>

            <Paper className={s.mainFeaturesPost} style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
              <Container maxWidth="xl">
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
      
    </div>)
}