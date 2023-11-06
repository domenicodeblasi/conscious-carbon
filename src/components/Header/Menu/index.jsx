import React from "react"
import styles from "./Menu.module.css"
import { useLocation } from "react-router-dom"
import { useMenu } from "../../../context/MenuContext"
import { Link } from "react-router-dom"

const Menu = () => {

    const { pathname } = useLocation()
    const { toggleMenu } = useMenu()

    return (
        <div
            className={styles.menu}
            style={{
                backgroundColor: pathname === "/" ? "var(--darkGreen)" : "var(--white)",
            }}
        >

            <Link
                to="/"
                className={`${styles.link} ${styles.homeLink}`}
                style={{
                    color: pathname === "/" ? "var(--white)" : "var(--black)",
                }}
                onClick={toggleMenu}
            >
                Home
            </Link>

            <Link
                to="/know-carbon-monoxide"
                className={`${styles.link} ${styles.greenHacksLink}`}
                style={{
                    color: pathname === "/" ? "var(--white)" : "var(--black)",
                }}
                onClick={toggleMenu}
            >
                Know Carbon Monoxide
            </Link>

            <Link
                to="/green-hacks"
                className={`${styles.link} ${styles.knowCarbonMonoxideLink}`}
                style={{
                    color: pathname === "/" ? "var(--white)" : "var(--black)",
                }}
                onClick={toggleMenu}
            >
                Green Hacks
            </Link>

        </div>
    )
}

export default Menu