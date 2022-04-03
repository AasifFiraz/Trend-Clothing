import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../pages/collection/collection.component';
import ProductsOverview from '../products-overview/products-overview.component';

const Shop = ({match}) => {
    console.log(match)
    return (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={ProductsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
}

export default Shop;

