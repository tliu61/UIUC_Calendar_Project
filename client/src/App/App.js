import React,{Component} from 'react';
//import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Components/Home'
import Login from '../Components/Login'
import '../Styles/App.css'

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/postevent' component = {Home}/>
          <Route exact path = '/findevent' component = {Home}/>
          <Route exact path = '/login' component = {Login} />
          <Route exact path = '/signup' component = {Home} />
          <Route exact path = '/myprofile' component = {Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
