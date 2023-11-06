import React from "react";
import styles from "./Hero.module.css"

const Hero = ({ imageUrl, mainTitle, secondaryTitle }) => {
    return (
        <div
            className={styles.heroContainer}
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
            <h1>{mainTitle}</h1>
            <h2>{secondaryTitle}</h2>
        </div>
    )
}

export default Hero