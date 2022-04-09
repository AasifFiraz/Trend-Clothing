import React from "react";
import { connect } from "react-redux";
import StripeCheckoutButton from "../../stripe-button/stripe-button.component";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../../redux/cart/cart.selector";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockComponent, TestWarningComponent, TotalComponent } from "./checkout.styles";

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockComponent className="header-block">
                <span>Product</span>
            </HeaderBlockComponent>
            <HeaderBlockComponent className="header-block">
                <span>Description</span>
            </HeaderBlockComponent>
            <HeaderBlockComponent className="header-block">
                <span>Quantity</span>
            </HeaderBlockComponent>
            <HeaderBlockComponent className="header-block">
                <span>Price</span>
            </HeaderBlockComponent>
            <HeaderBlockComponent className="header-block">
                <span>Remove</span>
            </HeaderBlockComponent>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItems => (
                <CheckoutItem key={cartItems.id} cartItem={cartItems}/>
            ))
        }
        <TotalComponent>TOTAL: ${total}</TotalComponent>
            <TestWarningComponent>
                *Please use the following test credit card for Payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </TestWarningComponent> 

            <StripeCheckoutButton key={cartItems.id} price={total}/>
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal  
})

export default connect(mapStateToProps)(CheckoutPage);