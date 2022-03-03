import React from 'react';
import ShopProductsPreview from '../shop-products/shop-products';
import SHOP_DATA from './shop.data';

class Shop extends React.Component {
    constructor(){
        super();

        this.state = {
            products: SHOP_DATA
        }
    }

    render(){
        const {products} = this.state
        return(
            <div className='shop-page'>
            {
                products.filter((product, prodIdx) => prodIdx < 4).map(({id, ...otherProductComponents}) => (
                    <ShopProductsPreview key={id} {...otherProductComponents} />
                ))
            }
            </div>
        )
    }
}

export default Shop;