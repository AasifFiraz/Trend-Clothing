export const addItemsToCart = (cartItems, cartItemsToAdd) => {
    const existingCart = cartItems.find((cartItem) => cartItem.id === cartItemsToAdd.id
    );

    if(existingCart) {
        return cartItems.map((cartItem) => 
            cartItem.id === cartItemsToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [ ...cartItems, {...cartItemsToAdd, quantity: 1} ]
    
}

export const removeItemFromCart = (cartItems, cartItemsToRemove)  => {
    const existingCart = cartItems.find(
        cartItem => cartItem.id === cartItemsToRemove.id
    )

    if(existingCart.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id)
    }
    else{
        return cartItems.map(
            cartItem => cartItem.id === cartItemsToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        )
    }
}