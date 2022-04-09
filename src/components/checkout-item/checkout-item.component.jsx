import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart, addItem, RemoveItem } from "../../redux/cart/cart.actions";
import { CheckoutItemContainer, ImageContainerComponent, NamePriceComponent, QuantityComponent } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, quantity, price } = cartItem
    return(
        <CheckoutItemContainer>
            <ImageContainerComponent>
                <img src={imageUrl} alt="item" />
            </ImageContainerComponent>
            <NamePriceComponent>{name}</NamePriceComponent>
            <QuantityComponent>
            <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityComponent>
            <NamePriceComponent>${price}</NamePriceComponent>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10006;</div>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(RemoveItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);