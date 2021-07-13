import React from "react";
import { Container, Grid, AppBar, Toolbar, IconButton, Typography,
    Button, Box, Paper} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from '../../AppCss';

type HeaderProps = {

}

export function Header () {
    const s = useStyles()
    return (<div>
         <AppBar position="fixed" className={s.toolbar}>
            <Container fixed>
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
            <Paper className={s.mainFeaturesPost} style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
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
    </div>)
}