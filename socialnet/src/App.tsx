import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import {useStyles} from './AppCss';
import { Container, Grid,} from "@material-ui/core";
import { Footer } from "./components/Footer/Footer";
import Divider from '@material-ui/core/Divider';
import { LineChart } from "./components/Charts/Chart";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { AppStateType} from "./redux/redux-store";
import { Dispatch } from "redux";
import {UsersContainer} from "./components/Users/UsersContainer";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";


type AppType= {
  state?: AppStateType;
  dispatch?: Dispatch
}


const App:React.FC<AppType> = (props) => {
  const s = useStyles()
  console.log('app')

  return (
    <Router>
      <HeaderContainer />
      <Container maxWidth="xl" className={s.mainContent} >
        <Grid container spacing={5} justify="center" >
          <Grid item xs={2}>
            <Navbar />
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item xs={10}>
              <Route path="/profile/:userId?" render={()=> <ProfileContainer />}/>
              <Route path="/dialogs" render={()=> <DialogsContainer />}/> 
              <Route path="/charts" render={()=> <LineChart/>}/> 
              <Route path="/users" render={()=> <UsersContainer/>}/>
              <Route path="/login" render={()=> <Login />}/>
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
