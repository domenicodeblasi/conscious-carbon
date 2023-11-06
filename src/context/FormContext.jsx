import React, { createContext, useContext, useState, useEffect } from "react"
import { useResults } from "./ResultsContext"

const FormContext = createContext()

export const useForm = () => {
    return useContext(FormContext)
}

const FormContextProvider = ({ children }) => {

    const { isResultsSectionOpen, setIsResultsSectionOpen } = useResults()
    const [switchValue, setSwitchValue] = useState("country")
    const [inputs, setInputs] = useState({
        country: "",
        latitude: 0,
        longitude: 0,
        startDate: "",
        endDate: "",
    })

    const toggleSwitch = () => {
        setSwitchValue(prevSwitchValue => prevSwitchValue === "country" ? "coordinates" : "country")
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target
        isResultsSectionOpen && setIsResultsSectionOpen(false)
        setInputs({
            ...inputs,
            [id]: value,
        })
    }

    const [isFetchingData, setIsFetchingData] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsFetchingData(true)
        setIsResultsSectionOpen(true)
    }

    useEffect(() => {
        switchValue === "country" ? (
            setInputs({
                ...inputs,
                latitude: 0,
                longitude: 0,
            })
        ) : (
            setInputs({
                ...inputs,
                country: "",
            })
        )
    }, [switchValue])

    const formObject = {
        switchValue,
        inputs,
        toggleSwitch,
        handleInputChange,
        handleSubmit,
        isFetchingData,
        setIsFetchingData,
    }

    return (
        <FormContext.Provider value={formObject}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContextProvider