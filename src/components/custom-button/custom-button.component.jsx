import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, invertedBtn,...otherProps}) => (
    <button 
    className={`${invertedBtn ? 'inverted-btn' : ''}
     ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
    {...otherProps}>
        {children}
    </button>
)

export default CustomButton; 