import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Nav/Navbar'
import MainBody from './components/main/MainBody'
import LoginForm from './components/signup/LoginForm'
import SignupForm from './components/signup/SignupForm'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path = '/' component = {MainBody}/>
            <Route path ='/login' component = {LoginForm}/>
            <Route path ='/signup' component = {SignupForm}/>
          </Switch>
        </div>
        
      </BrowserRouter>
    );
  }
}

export default App;
