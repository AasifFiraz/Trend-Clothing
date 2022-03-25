import React from 'react';
import HomePage from './components/pages/homepage/homepage.component';
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import HatsPage from './hatspage.component';
import CheckoutPage from './components/pages/checkout/checkout.component';
import SignInAndSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component';
import Shop from './components/shop/shop.component';
import './App.css';

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
      
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }else{
        setCurrentUser(userAuth);
      }
      
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  
  render(){
  return(
    <div>
    <Header />
    <Routes>
      <Route path='/' element={< HomePage />} />
      <Route path='/shop' element={< Shop/>} />
      <Route path='/shop/hats' element={< HatsPage/>} />
      <Route path='/signin' element={this.props.currentUser ? (<Navigate to='/'/>) : (< SignInAndSignUpPage/>)} />
      <Route path='/checkout' element={< CheckoutPage/>} />
    </Routes>
    </div>
    )
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
