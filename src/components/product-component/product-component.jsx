import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { ProductComponentContainer, ProductFooterContainer, ProductImageComponent, ProductNameComponent, ProductPriceComponent } from './product-component.styles';

const ProductComponent = ({ item, addItem }) =>{
    const { name, price, imageUrl } = item
    return (
        <ProductComponentContainer>
            <ProductImageComponent style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
        
            <ProductFooterContainer>
                <ProductNameComponent>{name}</ProductNameComponent>
                <ProductPriceComponent>${price}</ProductPriceComponent>
                <CustomButton invertedBtn  
                onClick={() => addItem(item)} >ADD TO CART</CustomButton>
            </ProductFooterContainer>
        </ProductComponentContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });

export default connect(null,mapDispatchToProps)(ProductComponent);