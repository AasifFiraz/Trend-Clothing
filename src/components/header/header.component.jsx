import React from 'react';
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selector.js';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import { ReactComponent as Logo } from '../../assets/suit.svg';
import CartDropDown from '../cart-dropdown/cart-dropdown.component.jsx';
import './header.styles.scss';

const Header = ({currentUser, hidden}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT | {currentUser.currentUser.displayName.toUpperCase()} </div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>                    
                }
                <CartIcon />
            </div>
            {
            hidden ? null :    
            <CartDropDown />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);