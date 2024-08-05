import React from "react";
import Navbar from "../Navbar.js";
import './index.css'
const Home=(props)=>{
    
    return(
        <div>
            <Navbar />
            <h1 className="home-title">Groceries delivered in 90 minutes</h1>
            <p className="home-title-para">Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
            <input type="text" placeholder="Search Your Products From Here" className="search-box"/>
            <button className="search-btn">Search</button>
        </div>
    )
}
export default Home