import React from 'react';

import './product.styles.scss'

const ProductComponent = ({name, price, imageUrl}) =>{
    return (
        <div className='product-component'>
            <div className='product-img' style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            
            <div className='product-footer'>
                <span className='product-name'>{name}</span>
                <span className='product-price'>${price}</span>
            </div>
        </div>
    )
}

export default ProductComponent;