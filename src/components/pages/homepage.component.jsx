import React from "react";
import './homepage.styles.scss'
import Directory from "../directory/directory.component";

const HomePage = ()=> {
    return(
    <div className="homepage">
    <h1>Trend Clothing</h1>
       <Directory />
    </div>
    )
}

export default HomePage;