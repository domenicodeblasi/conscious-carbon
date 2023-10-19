import React from "react"
import { useLocation } from "react-router-dom"
import styles from "./Hamburger.module.css"

const Hamburger = ({ toggleMenu, isMenuOpen }) => {

    const { pathname } = useLocation()

    return (
        <div
            className={styles.hamburgerContainer}
            onClick={toggleMenu}
        >
            <div
                className={`${isMenuOpen ? `${styles.bar} ${styles.xBar}` : `${styles.bar}`}
                ${pathname === "/" && styles.homeBar}`}
            ></div>
            <div
                className={`${isMenuOpen ? `${styles.bar} ${styles.hidden}` : `${styles.bar}`}
                ${pathname === "/" && styles.homeBar}`}
            ></div>
            <div
                className={`${isMenuOpen ? `${styles.bar} ${styles.xBar}` : `${styles.bar}`}
                ${pathname === "/" && styles.homeBar}`}
            ></div>
        </div>
    )
}

export default Hamburger