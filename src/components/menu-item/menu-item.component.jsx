import React from "react";
import './menu-item.styles.scss'
import { withRouter } from "react-router-dom";


const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => {
    return(
    <div className={`${size} menu-item`} onClick={() => history.push(`${linkUrl}`)}>
    
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

export default withRouter(MenuItem); 