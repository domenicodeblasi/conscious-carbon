import React, { createContext, useContext, useEffect, useState } from "react"
import { useError } from "./ErrorContext"

const CountriesContext = createContext()

export const useCountries = () => {
    return useContext(CountriesContext)
}

const CountriesContextProvider = ({ children }) => {

    const { toggleError, toggleMessageError } = useError()
    const [allCountriesArray, setAllCountriesArray] = useState([])

    const fetchCountriesData = async () => {
        try {
            const url = "https://restcountries.com/v3.1/all"
            const response = await fetch(url)
            const data = await response.json()

            setAllCountriesArray(data.map(country => ({
                country: country.name.common,
                id: country.cca2,
                alpha3code: country.cca3,
                flag: {
                    svg: country.flags.svg,
                    alt: country.flags.alt,
                }
            })))

        } catch (err) {
            toggleMessageError("Network Error, try to reload the page")
            toggleError()
        }
    }

    useEffect(() => {
        fetchCountriesData()
    }, [])

    useEffect(() => {
        console.log(allCountriesArray)
    }, [allCountriesArray])

    return (
        <CountriesContext.Provider value={{ allCountriesArray }}>
            {children}
        </CountriesContext.Provider>
    )
}

export default CountriesContextProvider