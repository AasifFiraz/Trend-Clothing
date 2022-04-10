import React from 'react'
import ProductComponent from '../product-component/product-component'
import { ProductsPreviewContainer, ShopProductsContainer, TitleComponent } from './shop-products.styles';
import { withRouter } from "react-router-dom";


const ShopProductsPreview = ({ title, items, history, match, routeName }) => {
    return (
        <ProductsPreviewContainer>
            <TitleComponent onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleComponent>
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

export default withRouter(ShopProductsPreview);