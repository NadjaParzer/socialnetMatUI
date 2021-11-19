import React from "react";
import { Container, Grid, AppBar, Toolbar, IconButton, Typography,
    Button, Box, Paper,Link} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from '../../AppCss';
import { NavLink } from "react-router-dom";

type HeaderProps = {
 isAuth: boolean,
 login: null | string,
 userId: null | number
}

export function Header (props: HeaderProps) {
    const s = useStyles()
    console.log('headerComp:' + props)
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
                <Typography className={s.title}><NavLink className={s.navLink} to="/users">Users</NavLink></Typography>
                <Typography className={s.title}><NavLink className={s.navLink} to="/settings">Settings</NavLink></Typography>
                <Box mr={3}>
                  { props.isAuth ? <NavLink style={{color: 'white', textDecoration: 'none'}} to={"/profile/" + props.userId}>{props.login}</NavLink> 
                                 : <NavLink style={{color: 'white', textDecoration: 'none'}} to="/login">
                                    <Button color="inherit" variant="outlined">Log In</Button>
                                  </NavLink>
                  }
                  
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