import React, { createContext, useContext, useEffect, useState } from "react"

const CountriesContext = createContext()

export const useCountries = () => {
    return useContext(CountriesContext)
}

const CountriesContextProvider = ({ children }) => {

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
            console.log("An error occurred, try to reload the page")
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