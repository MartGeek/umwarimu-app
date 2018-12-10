import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Error from './components/Error';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (

        <Router>
          <div>
              <Navigation />
              <Switch>
                <Route exact path ="/" component= {Home}/>
                <Route exact path ="/courses" component = {Courses}/>
                <Route exact path ="/signup" component = {SignUp}/>
                <Route exact path ="/login" component = {LogIn}/>
                <Route component={Error} />
              </Switch>
              
          </div>

          
        </Router>
    );
  }
}

export default App;
