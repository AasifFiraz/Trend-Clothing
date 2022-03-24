import React from "react";
import {connect} from 'react-redux';
import { ReactComponent as CartIcon } from "../../assets/cart-icon.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { ToggleCartHidden } from "../../redux/cart/cart.actions";
import './cart-icon.styles.scss';

const ShoppingIcon = ({ToggleCartHidden, cartItems}) => (
    <div className="full-cart-icon" onClick={ToggleCartHidden}>
        <CartIcon className="cart-icon"/>
        <span className="item-count">{cartItems}</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})

const mapStateToProps = (state) => ({
    cartItems: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingIcon);