import React, { createContext, useContext, useState, useEffect } from "react"
import { useCountries } from "./CountriesContext"
import { useForm } from "./FormContext"
import { useError } from "./ErrorContext"

const FetchDataContext = createContext()

export const useFetchData = () => {
    return useContext(FetchDataContext)
}

const FetchDataContextProvider = ({ children }) => {

    const { allCountriesArray } = useCountries()
    const { isFetchingData, setIsFetchingData, switchValue, inputs } = useForm()
    const { toggleMessageError, toggleError } = useError()

    const [data, setData] = useState([])
    const [country, setCountry] = useState({})

    useEffect(() => {

        const fetchData = async () => {

            let selectedCountry
            let url

            const getUrl = async () => {

                if (switchValue === "country") {
                    const countries = await allCountriesArray.filter(obj => obj.country.toLowerCase().startsWith(inputs.country))
                    console.log(countries)

                    if (countries.length == 0) {
                        throw new Error("I'm having trouble finding the country you picked. Take a look at what you've typed or choose a different country")
                    } else {
                        selectedCountry = await countries[0]
                        console.log(selectedCountry)
                        setCountry(selectedCountry)
                        return `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?country=${selectedCountry.alpha3code}&begin=${inputs.startDate}&end=${inputs.endDate}`
                    }

                } else {
                    return `https://api.v2.emissions-api.org/api/v2/carbonmonoxide/average.json?point=${inputs.longitude}&point=${inputs.latitude}&begin=${inputs.startDate}&end=${inputs.endDate}`
                }
            }

            try {
                url = await getUrl()
            } catch (err) {
                toggleMessageError(err.message)
                toggleError()
                setIsFetchingData(false)
                return
            }

            try {
                const response = await fetch(url)
                const json = await response.json()
                setData(json)
                setIsFetchingData(false)
            } catch (err) {
                toggleMessageError("Failed to load results, try to reload the page or choose different country or different coordinates. Keep in mind that CO data for small countries is not available sometimes (e.g. San Marino, Andorra, Liechtenstein, Monaco, Malta...)")
                toggleError()
                setIsFetchingData(false)
                return
            }

        }

        if (isFetchingData) {
            fetchData()
        }

    }, [isFetchingData])

    return (
        <FetchDataContext.Provider value={{ data, setData, country }}>
            {children}
        </FetchDataContext.Provider>
    )
}

export default FetchDataContextProvider