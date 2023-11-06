import React, { useState } from "react"
import styles from "./Form.module.css"
import { useFetchData } from "../../../context/FetchDataContext"
import { useForm } from "../../../context/FormContext"
import SwitchBtn from "./SwitchBtn"

const Form = () => {

    const { setData } = useFetchData()
    const { switchValue, inputs, handleInputChange, handleSubmit } = useForm()
    const today = new Date()
    const year = today.getFullYear()
    const month = (today.getMonth() + 1).toString().padStart(2, "0")
    const day = today.getDate().toString().padStart(2, "0")
    const todayDate = `${year}-${month}-${day}`

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
                        onFocus={() => {setData(0)}}
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
                            onFocus={() => {setData(0)}}
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
                            onFocus={() => {setData(0)}}
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
                    onFocus={() => {setData(0)}}
                    autoComplete="off"
                    max={todayDate}
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
                    onFocus={() => {setData(0)}}
                    min={inputs.startDate}
                    max={todayDate}
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