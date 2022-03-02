import React from "react";

import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
    
    <div className="background-img" 
    style={{
        backgroundImage: `url(${imageUrl})`
    }}/>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="sub-title">BUY NOW</span>
        </div>
    </div>
)

export default MenuItem;