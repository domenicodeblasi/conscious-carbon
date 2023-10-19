import React from "react"
import styles from "./Form.module.css"
import { useForm } from "../../../context/FormContext"
import SwitchBtn from "./SwitchBtn"

const Form = () => {

    const { switchValue, inputs, handleInputChange, handleSubmit } = useForm()

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >

            <div className={styles.switchBtnContainer}>
                <p>Search by</p>
                <SwitchBtn />
            </div>

            {switchValue === "country" ? (
                <div className={styles.inputAndLabelContainer}>
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        value={inputs.country}
                        onChange={handleInputChange}
                        autoComplete="off"
                        required
                    />
                </div>

            ) : (
                <>
                    <div className={styles.inputAndLabelContainer}>
                        <label htmlFor="latitude">Latitude</label>
                        <input
                            type="text"
                            id="latitude"
                            value={inputs.latitude}
                            onChange={handleInputChange}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className={styles.inputAndLabelContainer}>
                        <label htmlFor="longitude">Longitude</label>
                        <input
                            type="text"
                            id="longitude"
                            value={inputs.longitude}
                            onChange={handleInputChange}
                            autoComplete="off"
                            required
                        />
                    </div>
                </>
            )}

            <div className={styles.inputAndLabelContainer}>
                <label htmlFor="start-date">Start Date</label>
                <input
                    type="date"
                    id="startDate"
                    value={inputs.startDate}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
            </div>

            <div className={styles.inputAndLabelContainer}>
                <label htmlFor="end-date">End Date</label>
                <input
                    type="date"
                    id="endDate"
                    value={inputs.endDate}
                    onChange={handleInputChange}
                    min={inputs.startDate}
                    required
                />
            </div>

            <button
                type="submit"
                className={styles.submitBtn}
            >
                Calculate
            </button>

        </form>
    )
}

export default Form