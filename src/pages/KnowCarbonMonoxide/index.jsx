import React from "react"
import styles from "./KnowCarbonMonoxide.module.css"
import { useScreen } from "../../context/ScreenContext"
import Hero from "./../../components/Hero"
import KnowCarbonMonoxideImage from "./../../assets/imgs/hero-imgs/know-carbon-monoxide.jpg"
import BurnFuel from "./../../assets/imgs/know-carbon-monoxide/burn-fuel.jpg"
import Fireplace from "./../../assets/imgs/know-carbon-monoxide/fireplace.jpg"
import IndustrialFacilities from "./../../assets/imgs/know-carbon-monoxide/industrial-facilities.jpg"
import Headache from "./../../assets/imgs/know-carbon-monoxide/headache.jpg"
import Logo from "./../../assets/imgs/logo.svg"
import { Link } from "react-router-dom"

const KnowCarbonMonoxide = () => {

    const { scrollbarWidth } = useScreen()

    return (
        <section className={styles.pageLayout}>
            <Hero imageUrl={KnowCarbonMonoxideImage} mainTitle="Carbon Monoxide" secondaryTitle="understanding the silent threat" />
            <div className={styles.mainContent}>

                <div className={styles.overview}>
                    <div className={styles.overviewText}>
                        <p>Welcome to the "Know Carbon Monoxide" section of Conscious Carbon!</p>
                        <p>Here, we'll explore everything you need to know about carbon monoxide (CO), a gas that plays a crucial role in our daily lives and the environment.</p>
                        <p>We'll find out what CO is, where it comes from, the risks it poses, and how to stay aware of its impact.</p>
                    </div>
                    <div
                        className={styles.overviewImgContainer}
                        style={{
                            backgroundImage: `url(${BurnFuel})`
                        }}
                    ></div>
                </div>

                <div className={styles.contentSection}>
                    <div className={styles.contentSectionTextContainer}>
                        <h2 className={styles.contentSectionTitle}>What is Carbon Monoxide (CO)?</h2>
                        <p>Carbon Monoxide is a colorless, odorless, and tasteless gas that forms when carbon doesn't burn completely.</p>
                        <p>It's produced in various situations, including the burning of fuels in vehicles, fireplaces, wood-burning stoves, and cigarettes.</p>
                        <p>CO is called the silent killer because you can't detect it without special tools.</p>
                    </div>
                    <div
                        className={styles.contentSectionImgContainer}
                        style={{
                            backgroundImage: `url(${Fireplace})`
                        }}
                    ></div>
                </div>

                <div className={styles.contentSection}>
                    <div className={styles.contentSectionTextContainer}>
                        <h2 className={styles.contentSectionTitle}>Sources of Carbon Monoxide</h2>
                        <p>CO can be released from many sources, like:</p>
                        <ul style={{
                            listStyleImage: `url(${Logo})`
                        }}>
                            <li>motor vehicles</li>
                            <li>industrial facilities</li>
                            <li>wildfires</li>
                            <li>cigarettes</li>
                        </ul>
                        <p>It can also build up in enclosed spaces, such as our homes when there's inadequate ventilation.</p>
                    </div>
                    <div
                        className={styles.contentSectionImgContainer}
                        style={{
                            backgroundImage: `url(${IndustrialFacilities})`
                        }}
                    ></div>
                </div>

                <div className={styles.contentSection}>
                    <div className={styles.contentSectionTextContainer}>
                        <h2 className={styles.contentSectionTitle}>Health Risks</h2>
                        <p>Prolonged exposure to or breathing in carbon monoxide can be harmful to human health.</p>
                        <p>CO binds to the hemoglobin in our blood more effectively than oxygen, reducing the amount of oxygen available to our bodies.</p>
                        <p>This can lead to symptoms like headaches, dizziness, nausea, confusion, and even CO poisoning, which can be life-threatening.</p>
                    </div>
                    <div
                        className={styles.contentSectionImgContainer}
                        style={{
                            backgroundImage: `url(${Headache})`
                        }}
                    ></div>
                </div>

                <div className={styles.contentSection}>
                    <div className={styles.contentSectionTextContainer}>
                        <h2 className={styles.contentSectionTitle}>How to Protect Yourself from Carbon Monoxide</h2>
                        <p>To stay aware of CO and prevent health risks, here are some essential steps:</p>
                        <ul style={{
                            listStyleImage: `url(${Logo})`
                        }}>
                            <li>Install carbon monoxide detectors in your home and check them regularly.</li>
                            <li>Keep your vehicles well-maintained and ensure exhaust systems are in good condition.</li>
                            <li>Make sure wood-burning stoves and fireplaces are properly ventilated.</li>
                            <li>Avoid smoking indoors or reduce tobacco use.</li>
                        </ul>
                    </div>
                    <div
                        className={styles.contentSectionCTA}
                        style={{
                            width: `calc(100dvw - ${scrollbarWidth}px)`,
                            left: `calc((${document.body.clientWidth}px - 100%) / (-2))`,
                        }}
                    >
                        <div className={styles.contentSectionCTATextContainer}>
                            <p>Interested in practical steps to reduce CO emissions in your daily life?</p>
                            <p>Explore our "Green Hacks" section for actionable solutions.</p>
                        </div>
                        <div className={styles.contentSectionCTABtn}>
                            <Link
                                to="/green-hacks"
                            >
                                Find out how to take immediate action
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.contentSection}>
                    <div className={styles.contentSectionTextContainer}>
                        <p>At Conscious Carbon, our commitment is to spread awareness about the environmental and health impacts of carbon emissions, including carbon monoxide.</p>
                        <p>We're here to provide information, resources, and solutions to reduce the impact of CO and adopt more sustainable behaviors.</p>
                    </div>
                    <div
                        className={styles.contentSectionCTA}
                        style={{
                            width: `calc(100dvw - ${scrollbarWidth}px)`,
                            left: `calc((${document.body.clientWidth}px - 100%) / (-2))`,
                        }}
                    >
                        <div className={styles.contentSectionCTATextContainer}>
                            <p>Interested in practical steps to reduce CO emissions in your daily life?</p>
                            <p>Explore our "Green Hacks" section for actionable solutions.</p>
                        </div>
                        <div className={styles.contentSectionCTABtn}>
                            <a href="mailto:domenico.deblasi33@gmail.com">
                                contact us
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.finalText}>
                    <h2>Together, we can make a difference</h2>
                    <h2>Join us in the journey toward a conscious world with Conscious Carbon!</h2>
                </div>

            </div>
        </section>
    )
}

export default KnowCarbonMonoxide