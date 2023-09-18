import React from "react"
import styles from "./Navbar.module.css"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {

    const { pathname } = useLocation()

    return (
        <nav className={styles.navbar}>
            <Link
                to="/"
                className={styles.navbarItem}
            >Home</Link>
            <Link
                to="/know-carbon-monoxide"
                className={styles.navbarItem}
            >Know Carbon Monoxide</Link>
            <Link
                to="/green-hacks"
                className={styles.navbarItem}
            >Green Hacks</Link>
            {/* {pathname} */}
        </nav>
    )
}

export default Navbar