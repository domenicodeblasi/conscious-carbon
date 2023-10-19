import React, { createContext, useContext, useState, useEffect } from "react"
import { useForm } from "./FormContext"

const FetchDataContext = createContext()

export const useFetchData = () => {
    return useContext(FetchDataContext)
}

const FetchDataContextProvider = ({ children }) => {

    const { isFetchingData, setIsFetchingData, switchValue, inputs } = useForm()
    const [data, setData] = useState([])
    const urls = {
        searchByCountry: `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${inputs.country}&begin=${inputs.startDate}&end=${inputs.endDate}`,
        searchByCoordinates: `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?point=${inputs.longitude}&point=${inputs.latitude}&begin=${inputs.startDate}&end=${inputs.endDate}`
    }

    const fetchData = async () => {
        const url = switchValue === "country" ? urls.searchByCountry : urls.searchByCoordinates
        try {
            const response = await fetch(url)
            const json = await response.json()
            setData(json)
        } catch(err) {
            console.log(err)
        }
        setIsFetchingData(false)
    }

    useEffect(() => {
        if (isFetchingData) {
            fetchData()
        }
    }, [isFetchingData])

    return (
        <FetchDataContext.Provider value={{ data }}>
            {children}
        </FetchDataContext.Provider>
    )
}

export default FetchDataContextProvider