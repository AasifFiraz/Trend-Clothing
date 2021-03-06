import React from 'react';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import { Route } from 'react-router-dom';
import withSpinner from '../withspinner/with-spinner.component';
import CollectionPage from '../pages/collection/collection.component';
import ProductsOverview from '../products-overview/products-overview.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const ProductsOverviewWithSpinner = withSpinner(ProductsOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class Shop extends React.Component{
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false})
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <ProductsOverviewWithSpinner isLoading={loading} {...props}/>} />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}
        />
      </div>
    );
  }
} 

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null,mapDispatchToProps)(Shop);

