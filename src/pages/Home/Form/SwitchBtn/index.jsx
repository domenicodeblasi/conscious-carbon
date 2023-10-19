import React from "react"
import styles from "./SwitchBtn.module.css"
import { useForm } from "../../../../context/FormContext"

const SwitchBtn = () => {

    const { switchValue, toggleSwitch } = useForm()

    return (
        <div
            className={styles.switchContainer}
            onClick={toggleSwitch}
        >
            <span className={`${styles.switch} ${switchValue === "country" ? styles.switchOnCountry : styles.switchOnCoordinates}`}></span>
            <span className={`${styles.option} ${switchValue === "country" && styles.optionWhiteText}`}>country</span>
            <span className={`${styles.option} ${switchValue === "coordinates" && styles.optionWhiteText}`}>coordinates</span>
        </div>
    )
}

export default SwitchBtn