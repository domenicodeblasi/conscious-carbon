import React from "react"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className={styles.contact}>
                <h2>Contact</h2>
                <div className={styles.contactList}>
                    <a href="https://it.linkedin.com/in/domenico-de-blasi">LinkedIn</a>
                    <a href="mailto://domenico.deblasi33@gmail.com">Email</a>
                    <a href="https://domenicodeblasi.netlify.app/">Portfolio</a>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>© Domenico De Blasi 2023-present.</p>
                <p>All rights reserved.</p>
            </div>

        </footer>
    )
}

export default Footer