import React from "react";
import './index.css'
const Navbar = (props) => {
    return (
        <div className="main-container">
            <div className="navbar-container">
                <div className="logo">
                    logo
                </div>

                <div className="dropdown">
                    <select className="drop-options">
                        <option value="groceries">Groceries</option>
                        <option value="fsgdfsg">Grocery</option>
                        <option>Bakery</option>
                        <option>Makeup</option>
                        <option>vegetables</option>
                        <option> fruits</option>
                    </select>

                </div>
                <div className="login">
                    <button className="join-btn">join</button>
                    <button className="seller-btn">Become a Seller</button>
                </div>
            </div>

        </div>

    )
}
export default Navbar