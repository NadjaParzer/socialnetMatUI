import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import {useStyles} from './AppCss';
import { Container, Grid,} from "@material-ui/core";
import { Footer } from "./components/Footer/Footer";
import Divider from '@material-ui/core/Divider';
//import state, { updateNewPostText } from './redux/state';
import { StoreType } from "./redux/store";
import { LineChart } from "./components/Charts/Chart";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { ReduxStoreType } from "./redux/redux-store";

type AppType= {
  store:ReduxStoreType
}


const App:React.FC<AppType> = (props) => {
  const s = useStyles()

  const state = props.store.getState()

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
              <Route path="/profile" render={()=> <Profile dispatch={props.store.dispatch.bind(props.store)}
               newPostText={state.profilePage.newPostText}
               posts={state.profilePage.posts}/>}/>
              <Route path="/dialogs" render={()=> <DialogsContainer dispatch={props.store.dispatch.bind(props.store)} 
               dialogs={state.dialogsPage.dialogs} newMessageText={state.dialogsPage.newMessageText}
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
