import React from "react"
import styles from "./Home.module.css"
import { useForm } from "../../context/FormContext"
import { useFetchData } from "../../context/FetchDataContext"
import Logo from "./../../assets/imgs/logo.svg"
import Form from "./Form"
import Spinner from "./../../components/Spinner"
import Results from "./Results"

const Home = () => {

    const { isFetchingData } = useForm()
    const { data } = useFetchData()

    return (
        <section className={styles.pageLayout}>
            <section className={styles.summary}>
                <p>Welcome to</p>
                <p>Conscious Carbon!</p>
                <p>Join us in the battle against carbon monoxide emissions. Calculate emissions, discover ways to reduce them, and gain a deeper understanding of carbon monoxide.</p>

                <a
                    href="#main-content"
                    className={styles.callToAction}
                >
                    Take action now for a sustainable future!
                </a>

            </section>
            <section className={styles.logotypeContainer} id="main-content">
                <img
                    src={Logo}
                    alt="Conscious Carbon"
                    className={styles.logo}
                />
                <h1 className={styles.heading}>Conscious Carbon</h1>
            </section>
            <Form />
            {isFetchingData && <Spinner />}
            {data.length > 0 && <Results />}
        </section>
    )
}

export default Home