import React from "react";
import Directory from "../../directory/directory.component";
import { HomePageComponent } from "./homepage.styles";

const HomePage = ()=> {
    return(
    <HomePageComponent>
    <h1>Trend Clothing</h1>
       <Directory />
    </HomePageComponent>
    )
}

export default HomePage;