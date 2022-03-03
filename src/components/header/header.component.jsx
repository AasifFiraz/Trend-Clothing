import React from 'react';
import { Link ,useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/suit.svg';
import './header.styles.scss';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <div className='logo-container' onClick={() => navigate('/')}>
                <Logo className='logo' />
            </div>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
            </div>
        </div>
    )
}

export default Header;