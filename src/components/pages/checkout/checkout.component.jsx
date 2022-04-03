import React from "react";
import { connect } from "react-redux";
import './checkout.styles.scss'
import StripeCheckoutButton from "../../stripe-button/stripe-button.component";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../../redux/cart/cart.selector";
import CheckoutItem from "../../checkout-item/checkout-item.component";

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItems => (
                <CheckoutItem key={cartItems.id} cartItem={cartItems}/>
            ))
        }
        <div className="total">TOTAL: ${total}</div>
            <div className="test-warning">
                *Please use the following test credit card for Payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div> 
            <StripeCheckoutButton key={cartItems.id} price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal  
})

export default connect(mapStateToProps)(CheckoutPage);