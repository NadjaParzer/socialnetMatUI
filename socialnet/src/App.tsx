import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';




function App() {


  return (
    <Router>
     
        <Header/>


        <Route exact path="/Profile">
          <Profile />
        </Route>
        <Route exact path="/Navbar">
          <Navbar />
        </Route>
    
    </Router>
  );
}

export default App;
