import React from 'react';
import { auth } from '../../firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart.selector.js';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors.js';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import { ReactComponent as Logo } from '../../assets/suit.svg';
import CartDropDown from '../cart-dropdown/cart-dropdown.component.jsx';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/shop'>CONTACT</OptionLink>
                {
                    currentUser ? 
                    <OptionDiv 
                    onClick={() => auth.signOut()}> SIGN OUT | {currentUser.currentUser.displayName.toUpperCase()} 
                    </OptionDiv>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>                    
                }
                <CartIcon />
            </OptionsContainer>
            {
            hidden ? null :    
            <CartDropDown />
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);