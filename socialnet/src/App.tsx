import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import {useStyles} from './AppCss';
import { Container, Grid,} from "@material-ui/core";
import { Footer } from "./components/Footer/Footer";
import Divider from '@material-ui/core/Divider';
import { LineChart } from "./components/Charts/Chart";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { AppStateType} from "./redux/redux-store";
import { Dispatch } from "redux";
import { Users } from "./components/Users/Users";


type AppType= {
  state?: AppStateType;
  dispatch?: Dispatch
}


const App:React.FC<AppType> = (props) => {
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
              <Route path="/profile" render={()=> <Profile />}/>
              <Route path="/dialogs" render={()=> <DialogsContainer />}/> 
               <Route path="/charts" render={()=> <LineChart/>}/> 
               <Route path="/users" render={()=> <Users/>}/>
          </Grid>
        </Grid>
      </Container>
     <Footer />
    </Router>
  );
}

export default App;

//<DialogsContainer dispatch={props.dispatch} 
//               dialogs={props.state.dialogsPage.dialogs} newMessageText={props.state.dialogsPage.newMessageText}
//               messages={props.state.dialogsPage.messages}/>

// <Profile dispatch={props.dispatch}
//               newPostText={props.state.profilePage.newPostText}
//               posts={props.state.profilePage.posts}/>
