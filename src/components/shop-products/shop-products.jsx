import React from 'react'
import ProductComponent from '../product-component/product-component'
import { ProductsPreviewContainer, ShopProductsContainer, TitleComponent } from './shop-products.styles';


const ShopProductsPreview = ({title, items, routeName, history}) => {
    return (
        <ProductsPreviewContainer>
            <TitleComponent onClick={() => history.push(`${routeName}`)}>{title.toUpperCase()}</TitleComponent>
            <ShopProductsContainer>
                {
                    items.filter((item, idx) => idx < 4)
                    .map((item) => (
                        <ProductComponent key={item.id} item={item} />
                    ))
                }
            </ShopProductsContainer>
        </ProductsPreviewContainer>
    )
}

export default ShopProductsPreview;