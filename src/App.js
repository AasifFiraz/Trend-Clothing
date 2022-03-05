import React from 'react';
import HomePage from './components/pages/homepage/homepage.component';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/header/header.component';
import { auth } from './components/firebase/firebase.utils';
import HatsPage from './hatspage.component';
import SignInAndSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component';
import Shop from './components/shop/shop.component';
import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  
  render(){
  return(
    <div>
    <Header currentUser= {this.state.currentUser } />
    <Routes>
      <Route path='/' element={< HomePage />} />
      <Route path='/shop' element={< Shop/>} />
      <Route path='/shop/hats' element={< HatsPage/>} />
      <Route path='/signin' element={< SignInAndSignUpPage/>} />
    </Routes>
    </div>
    )
  }
}


export default App;
