import React from "react";
import {connect} from 'react-redux';
import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { ToggleCartHidden } from "../../redux/cart/cart.actions";
import { FullCartIconContainer, CartIconComponent, ItemCountComponent } from "./cart-icon.styles";

const ShoppingIcon = ({ToggleCartHidden, cartItems}) => (
    <FullCartIconContainer onClick={ToggleCartHidden}>
        <CartIconComponent />
        <ItemCountComponent>{cartItems}</ItemCountComponent>
    </FullCartIconContainer>
)

const mapDispatchToProps = (dispatch) => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingIcon);