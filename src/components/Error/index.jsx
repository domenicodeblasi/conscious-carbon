import React from "react"
import styles from "./Error.module.css"
import { useError } from "../../context/ErrorContext"

import { XMarkIcon } from "@heroicons/react/24/outline"

const Error = () => {

    const { isErrorShown, toggleError, messageError, toggleMessageError } = useError()

    return (
        <div className={styles.errorContainer}>
            <XMarkIcon 
                className={styles.closeBtn}
                onClick={() => {
                    toggleError()
                    toggleMessageError("")
                }}
            />
            <h3 className={styles.messageError}>{messageError}</h3>
        </div>
    )
}

export default Error