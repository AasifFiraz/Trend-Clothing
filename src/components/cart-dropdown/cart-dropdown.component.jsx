import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import { ToggleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItems } from "../../redux/cart/cart.selector";
import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems, dispatch}) => {
    const navigate = useNavigate();
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length > 0 ? 
            cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            : 
            <span className="empty-message">Your Cart is Empty</span>
        }
        </div>
        <CustomButton invertedBtn onClick={() => {
            navigate('/checkout')
            dispatch(ToggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropDown);