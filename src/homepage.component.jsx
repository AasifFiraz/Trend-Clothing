import React from "react";
import './homepage.styles.scss'

const HomePage = ()=>(
    <div className="homepage">
        <div className="dir-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">HATS</h1>
                    <span className="sub-title">Buy Now</span>
                </div>
            </div>
            <div className="menu-item">
            <div className="content">
                <h1 className="title">JACKETS</h1>
                <span className="sub-title">Buy Now</span>
            </div>
            </div>

            <div className="menu-item">
            <div className="content">
                <h1 className="title">Shoes</h1>
                <span className="sub-title">Buy Now</span>
            </div>
            </div>

            <div className="menu-item">
            <div className="content">
                <h1 className="title">WOMENS</h1>
                <span className="sub-title">Buy Now</span>
            </div>
            </div>
            <div className="menu-item">
            <div className="content">
                <h1 className="title">MENS</h1>
                <span className="sub-title">Buy Now</span>
            </div>
            </div>
        </div>
    </div>
)

export default HomePage;