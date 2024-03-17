import React from 'react'
import Style from "./Header.module.css"

const Header = () => {
    return (
    <header className={Style.header}>
        <img src="images/LOGO.png" alt="Logo" className={Style.logo} />
        <button className={Style.Butto}>Buy Now</button>
    </header>
);
}

export default Header
