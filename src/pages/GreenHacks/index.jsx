import React from "react"
import styles from "./GreenHacks.module.css"
import Hero from "./../../components/Hero"
import GreenHacksImage from "./../../assets/imgs/hero-imgs/green-hacks.jpg"
import { greenHacksData } from "../../data/green-hacks"

const GreenHacks = () => {
    return (
        <section className={styles.pageLayout}>
            <Hero imageUrl={GreenHacksImage} mainTitle="Green Hacks" secondaryTitle="to reduce CO emissions" />
            <div className={styles.cardsContainer}>
                {greenHacksData && greenHacksData.map(card => {
                    const { id, image, title, sections } = card
                    return (
                        <div key={id} className={styles.card}>
                            <div className={styles.img} style={{ backgroundImage: `url(${image})` }}></div>
                            <div className={styles.cardTextContainer}>
                                <h2 className={styles.title}>{title}</h2>
                                {sections.map(section => {
                                    const { id, title, paragraph } = section
                                    return (
                                        <div key={id} className={styles.section}>
                                            <h3 className={styles.subtitle}>{title}</h3>
                                            <p className={styles.paragraph}>{paragraph}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default GreenHacks