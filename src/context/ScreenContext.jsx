import React, { createContext, useContext, useState, useEffect } from "react"

const ScreenContext = createContext()

export const useScreen = () => {
    return useContext(ScreenContext)
}

const ScreenContextProvider = ({ children }) => {

    const sm = 640
    const md = 768
    const lg = 1024
    const xl = 1280
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth)
    const [scrollbarWidth, setScrollbarWidth] = useState(window.innerWidth - document.documentElement.clientWidth)

    const handleResize = () => {
        setCurrentWidth(window.innerWidth)
        setScrollbarWidth(window.innerWidth - document.documentElement.clientWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    return (
        <ScreenContext.Provider value={{ sm, md, lg, xl, currentWidth, scrollbarWidth }}>
            {children}
        </ScreenContext.Provider>
    )
}

export default ScreenContextProvider