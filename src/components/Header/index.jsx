import React, { useState } from "react"
import styles from "./Header.module.css"
import { useScreen } from "./../../context/ScreenContext.jsx"
import { useLocation } from "react-router-dom"
import Logo from "./../../assets/imgs/logo.svg"
import WhiteLogo from "./../../assets/imgs/logo-white.svg"
import Hamburger from "./Hamburger"
import Navbar from "./Navbar"

const Header = () => {

    const { currentWidth, md } = useScreen()
    const { pathname } = useLocation()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(prevValue => !prevValue)
    }

    return (
        <header className={`${styles.header} ${pathname === "/" && styles.homeHeader}`}>
            <img
                src={pathname !== "/" ? Logo : WhiteLogo}
                alt="Conscious Carbon"
                className={styles.logo}
            />
            {currentWidth < md ? (
                <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            ) : (
                <Navbar />
            )}
        </header>
    )
}

export default Header