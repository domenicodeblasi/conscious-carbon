import React, { useState } from "react"
import styles from "./Header.module.css"
import { useScreen } from "./../../context/ScreenContext.jsx"
import Logo from "./../../assets/imgs/logo.svg"
import Hamburger from "./Hamburger"
import Navbar from "./Navbar"

const Header = () => {

    const { currentWidth, md } = useScreen()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(prevValue => !prevValue)
    }

    return (
        <header className={styles.header}>
            <img
                src={Logo}
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