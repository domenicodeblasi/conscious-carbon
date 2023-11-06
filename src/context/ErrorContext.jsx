import React, { createContext, useContext, useState } from "react"

const ErrorContext = createContext()

export const useError = () => {
    return useContext(ErrorContext)
}

const ErrorContextProvider = ({ children }) => {

    const [isErrorShown, setIsErrorShown] = useState(false)
    const [messageError, setMessageError] = useState("")

    const toggleError = () => {
        setIsErrorShown(prevValue => !prevValue)
    }

    const toggleMessageError = (message) => {
        setMessageError(message)
    }

    return (
        <ErrorContext.Provider value={{ isErrorShown, toggleError, messageError, toggleMessageError }}>
            {children}
        </ErrorContext.Provider>
    )
}

export default ErrorContextProvider