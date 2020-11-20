import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer';
import MainDev from './components/Main';
import Main from './components/Landing';
import List from './components/List'
import About from './components/About';
import Login from './components/Login';
import Contact from './components/Contact';
import Concept from './components/Concept';
import Committee from './components/Committee';
import Register from './components/Register'
import RegisterUser from './components/RegisterUser'
import RegisterEvent from './components/RegisterEvent'

class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    top: true,
    dev: true
  };
  }
  // 일정 스크롤 이하로 내리면 네비게이션바  화면 변화
  componentWillMount() {
  document.addEventListener( 'scroll', () => {
    if(window.scrollY < 30) {
      this.setState( {
        top:true,
      });
    } else {
      this.setState( {
        top:false,
      });
    }
  });
  }

  render() {

  let url = window.location.href;
    return (
      <div style={{ overflowX: 'hidden' }}>      
        <BrowserRouter>
        {
          this.state.dev ?
          <HeaderContainer/>
          :
          null
        }
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/main" component={MainDev}/>
          <Route exact path="/list" component={List}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/concept" component={Concept}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/committee" component={Committee}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/register/user" component={RegisterUser}/>
          <Route exact path="/register/event" component={RegisterEvent}/>
          <Redirect from="/" to="/" /> 
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;