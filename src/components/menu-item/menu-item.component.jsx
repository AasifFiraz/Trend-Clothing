import React from "react";
import './menu-item.styles.scss'
import { useNavigate } from "react-router-dom";

const MenuItem = ({title, imageUrl, size, linkUrl, match}) => {
    const navigate = useNavigate();
    return(
    <div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)}>
    
    <div className="background-img" 
    style={{
        backgroundImage: `url(${imageUrl})`
    }}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="sub-title">BUY NOW</span>
        </div>
    </div>
    )
}

export default MenuItem;