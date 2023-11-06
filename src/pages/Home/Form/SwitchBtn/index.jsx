import React from "react"
import styles from "./SwitchBtn.module.css"
import { useForm } from "./../../../../context/FormContext"
import { useFetchData } from "./../../../../context/FetchDataContext"

const SwitchBtn = () => {

    const { switchValue, toggleSwitch } = useForm()
    const { setData } = useFetchData()

    return (
        <div
            className={styles.switchContainer}
            onClick={toggleSwitch}
        >
            <span className={`${styles.switch} ${switchValue === "country" ? styles.switchOnCountry : styles.switchOnCoordinates}`}></span>
            <span
                className={`${styles.option} ${switchValue === "country" && styles.optionWhiteText}`}
                onClick={() => setData(0)}
            >
                country
            </span>
            <span
                className={`${styles.option} ${switchValue === "coordinates" && styles.optionWhiteText}`}
                onClick={() => setData(0)}
            >
                coordinates
            </span>
        </div>
    )
}

export default SwitchBtn