import React from "react";
import {connect} from 'react-redux';
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";
import { ToggleCartHidden } from "../../redux/cart/cart.actions";
import './cart-icon.styles.scss';

const ShoppingIcon = ({ToggleCartHidden}) => (
    <div className="full-cart-icon" onClick={ToggleCartHidden}>
        <CartIcon className="cart-icon"/>
        <span className="item-count">1</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})

export default connect(null,mapDispatchToProps)(ShoppingIcon);