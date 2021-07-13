import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import {useStyles} from './AppCss';
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { Footer } from "./components/Footer/Footer";
import Divider from '@material-ui/core/Divider';



function App() {
  const s = useStyles()

  return (
    <Router>
      <Header />
      <Container maxWidth="xl" className={s.mainContent} >
        <Grid container spacing={5} justify="center" >
          <Grid item xs={3}>
            <Navbar /> 
            <Divider orientation="vertical" flexItem />
          </Grid>
          
          <Grid item xs={9}>
            <Profile/>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Router>

  );
}

export default App;

{/*<Container maxWidth="md">
            <Typography variant="h2" color="textPrimary" gutterBottom
              align="center">hffrufherhjfrjf jhfigjiregj</Typography>
            <Typography variant="h5" color="textSecondary" paragraph align="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus sapiente maiores quas, corrupti accusantium provident possimus ipsa eum? A distinctio nostrum quasi repellat voluptatibus ex veritatis illo aliquam doloribus at!</Typography>
            </Container>
             <Button variant="outlined" color="primary">Learn More</Button>
              <Button variant="contained" color="primary">Start Now</Button> */}