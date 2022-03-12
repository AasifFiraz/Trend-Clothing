import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './product.styles.scss'

const ProductComponent = ({ item, addItem }) =>{
    const { name, price, imageUrl } = item
    return (
        <div className='product-component'>
            <div className='product-img' style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
        
            <div className='product-footer'>
                <span className='product-name'>{name}</span>
                <span className='product-price'>${price}</span>
                <CustomButton invertedBtn  
                onClick={() => addItem(item)} >ADD TO CART</CustomButton>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(ProductComponent);