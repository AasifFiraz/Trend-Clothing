import React from 'react';
import { Link ,useNavigate } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/suit.svg';
import './header.styles.scss';

const Header = ({currentUser}) => {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <div className='logo-container' onClick={() => navigate('/')}>
                <Logo className='logo' />
            </div>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT | {currentUser.currentUser.displayName} </div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>                    
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);