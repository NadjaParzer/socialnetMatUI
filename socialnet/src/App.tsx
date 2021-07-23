import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import {useStyles} from './AppCss';
import { Container, Grid,} from "@material-ui/core";
import { Footer } from "./components/Footer/Footer";
import Divider from '@material-ui/core/Divider';
import { Dialogs } from "./components/Dialogs/Dialogs";
import state, { updateNewPostText } from './redux/state';
import { addPost } from "./redux/state";
import { LineChart } from "./components/Charts/Chart";


function App() {
  const s = useStyles()

  return (
    <Router>
      <Header />
      <Container maxWidth="xl" className={s.mainContent} >
        <Grid container spacing={5} justify="center" >
          <Grid item xs={2}>
            <Navbar />
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item xs={10}>
              <Route path="/profile" render={()=> <Profile addPost={addPost} newPostText={state.profilePage.newPostText}
               posts={state.profilePage.posts} updateNewPostText={updateNewPostText}/>}/>
              <Route path="/dialogs" render={()=> <Dialogs dialogs={state.dialogsPage.dialogs}
               messages={state.dialogsPage.messages}/>}/> 
               <Route path="/charts" render={()=> <LineChart/>}/> 
          </Grid>
        </Grid>
      </Container>
     <Footer />
    </Router>
  );
}

export default App;
