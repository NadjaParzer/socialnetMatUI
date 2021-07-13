import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import {useStyles} from './AppCss';
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { Footer } from "./components/Footer/Footer";



function App() {
  const s = useStyles()

  return (
    <Router>
        <Header/>
        <div className={s.mainContent} >
          <Container maxWidth="md">
            <Typography variant="h2" color="textPrimary" gutterBottom
             align="center">hffrufherhjfrjf jhfigjiregj</Typography>
            <Typography variant="h5" color="textSecondary" paragraph align="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus sapiente maiores quas, corrupti accusantium provident possimus ipsa eum? A distinctio nostrum quasi repellat voluptatibus ex veritatis illo aliquam doloribus at!</Typography>
          </Container>
        </div>
        <div className="mainButtons">
          <Grid container spacing={5} justify="flex-start" >
            <Grid item xl={3}>
            <Navbar /> 
            </Grid> 
            <Grid item>
              <Button variant="outlined" color="primary">Learn More</Button>
              <Button variant="contained" color="primary">Start Now</Button>
            </Grid>
          </Grid>
        </div>

        <Route exact path="/Profile">
          <Profile />
        </Route>
        <Footer/>
    </Router>
  );
}

export default App;
