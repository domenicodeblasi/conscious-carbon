import React, { useState } from "react"
import styles from "./Header.module.css"
import { useScreen } from "./../../context/ScreenContext.jsx"
import { useMenu } from "../../context/MenuContext"
import { useLocation } from "react-router-dom"
import Logo from "./../../assets/imgs/logo.svg"
import WhiteLogo from "./../../assets/imgs/logo-white.svg"
import Hamburger from "./Hamburger"
import Navbar from "./Navbar"
import Menu from "./Menu"

const Header = () => {

    const { currentWidth, md } = useScreen()
    const { isMenuOpen } = useMenu()
    const { pathname } = useLocation()

    return (
        <header
            className={`${styles.header} ${pathname === "/" && styles.homeHeader}`}
            style={{
                position: isMenuOpen && "fixed",
                backgroundColor: pathname === "/" ? "var(--darkGreen)" : "var(--white)",
            }}
        >
            <img
                src={pathname !== "/" ? Logo : WhiteLogo}
                alt="Conscious Carbon"
                className={styles.logo}
            />
            {currentWidth < md ? (
                <Hamburger />
            ) : (
                <Navbar />
            )}
            {isMenuOpen && <Menu />}
        </header>
    )
}

export default Header