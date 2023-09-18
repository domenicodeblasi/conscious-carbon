import React from "react"
import styles from "./Home.module.css"
import Logo from "./../../assets/imgs/logo.svg"

const Home = () => {
    return (
        <section className={styles.pageLayout}>
            <div className={styles.logotypeContainer}>
                <img
                    src={Logo}
                    alt="Conscious Carbon"
                    className={styles.logo}
                />
                <h1 className={styles.heading}>Conscious Carbon</h1>
            </div>

        </section>
    )
}

export default Home