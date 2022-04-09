import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import ShopProductsPreview from "../shop-products/shop-products";
import { selectShopProducts } from "../../redux/shop/shop.selectors";

const ProductsOverviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ProductsOverview = ({products}) => (
    <ProductsOverviewContainer>
    {
        products.map(({id, ...otherProductComponents}) => (
            <ShopProductsPreview key={id} {...otherProductComponents} />
        ))
    }
    </ProductsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    products: selectShopProducts
})

export default connect(mapStateToProps)(ProductsOverview);