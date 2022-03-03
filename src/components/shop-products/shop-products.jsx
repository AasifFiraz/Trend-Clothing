import React from 'react'
import ProductComponent from '../product-component/product-component'
import './shop-products.scss'

const ShopProductsPreview = ({title, items}) => {
    return (
        <div className='products-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='shop-products'>
                {
                    items.filter((product) => product.id <= 4)
                    .map(({id, ...otherProductComponent}) => (
                        <ProductComponent key={id} {...otherProductComponent} />
                    ))
                }
            </div>
        </div>
    )
}

export default ShopProductsPreview;