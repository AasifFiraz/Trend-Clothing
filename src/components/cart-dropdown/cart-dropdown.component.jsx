import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import { ToggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { CartDropDownContainer, CartItemsContainer, EmptyMessageComponent } from "./cart-dropdown.styles";

const CartDropDown = ({cartItems, dispatch, history}) => {
    return(
    <CartDropDownContainer>
        <CartItemsContainer>
        {
            cartItems.length > 0 ? 
            
            cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            : 
            <EmptyMessageComponent>Your Cart is Empty</EmptyMessageComponent>
        }
        </CartItemsContainer>
        <CustomButton invertedBtn onClick={() => {
            history.push('/checkout')
            dispatch(ToggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </CartDropDownContainer>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));