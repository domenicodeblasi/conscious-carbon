import React, { createContext, useContext, useState } from "react"

const ResultsContext = createContext()

export const useResults = () => {
    return useContext(ResultsContext)
}

const ResultsContextProvider = ({ children }) => {

    const [isResultsSectionOpen, setIsResultsSectionOpen] = useState(false)

    return (
        <ResultsContext.Provider value={{ isResultsSectionOpen, setIsResultsSectionOpen }}>
            {children}
        </ResultsContext.Provider>
    )
}

export default ResultsContextProvider