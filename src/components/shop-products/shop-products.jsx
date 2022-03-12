import React from 'react'
import ProductComponent from '../product-component/product-component'
import './shop-products.scss'

const ShopProductsPreview = ({title, items}) => {
    return (
        <div className='products-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='shop-products'>
                {
                    items.filter((item, idx) => idx < 4)
                    .map((item) => (
                        <ProductComponent key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default ShopProductsPreview;