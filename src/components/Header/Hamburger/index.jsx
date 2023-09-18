import React, { useState } from "react"
import styles from "./Hamburger.module.css"

const Hamburger = ({ toggleMenu, isMenuOpen }) => {
    return (
        <div
            className={styles.hamburgerContainer}
            onClick={toggleMenu}
        >
            <div className={isMenuOpen ? `${styles.bar} ${styles.xBar}` : `${styles.bar}`}></div>
            <div className={isMenuOpen ? `${styles.bar} ${styles.hidden}` : `${styles.bar}`}></div>
            <div className={isMenuOpen ? `${styles.bar} ${styles.xBar}` : `${styles.bar}`}></div>
        </div>
    )
}

export default Hamburger