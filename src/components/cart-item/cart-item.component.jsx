import React from "react";
import { CartItemComponent, CartItemImageComponent, ItemDetailsContainer, NameComponent  } from "./cart-item.styles";

const CartItem = ({item: {name, price, imageUrl, quantity}}) => (
        <CartItemComponent>
            <CartItemImageComponent src={imageUrl} alt='item'/>
            <ItemDetailsContainer>
                <NameComponent>{name}</NameComponent>
                <span>{quantity} x ${price}</span>
            </ItemDetailsContainer>
        </CartItemComponent>
)


export default CartItem;