import React,{Component} from 'react';
//import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Components/Routes/Home'
import Login from '../Components/Routes/Login'
import PostEvent from '../Components/Routes/PostEvent'
import SearchEvent from '../Components/Routes/SearchEvent';
import Signup from '../Components/Routes/Signup';
import '../Styles/App.css'

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/postevent' component = {PostEvent}/>
          <Route exact path = '/findevent' component = {SearchEvent}/>
          <Route exact path = '/login' component = {Login} />
          <Route exact path = '/signup' component = {Signup} />
          <Route exact path = '/myprofile' component = {Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
