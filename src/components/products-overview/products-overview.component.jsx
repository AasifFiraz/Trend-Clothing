import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { createStructuredSelector } from "reselect";
import ShopProductsPreview from "../shop-products/shop-products";
import { selectCollectionsForPreview  } from "../../redux/shop/shop.selectors";

const ProductsOverviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ProductsOverview = ({collections}) => (
    <ProductsOverviewContainer>
    {
        collections.map(({id, ...otherCollectionProps }) => (
            <ShopProductsPreview key={id} {...otherCollectionProps } />
        ))
    }
    </ProductsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(ProductsOverview);