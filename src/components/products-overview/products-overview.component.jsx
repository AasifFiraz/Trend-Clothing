import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ShopProductsPreview from "../shop-products/shop-products";
import { selectShopProducts } from "../../redux/shop/shop.selectors";
import './products-overview.styles.scss'

const ProductsOverview = ({products}) => (
    <div className="products-overview">
    {
        products.map(({id, ...otherProductComponents}) => (
            <ShopProductsPreview key={id} {...otherProductComponents} />
        ))
    }
    </div>
)

const mapStateToProps = createStructuredSelector({
    products: selectShopProducts
})

export default connect(mapStateToProps)(ProductsOverview);