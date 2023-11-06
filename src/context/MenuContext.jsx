import React, { createContext, useContext, useState } from "react"

const MenuContext = createContext()

export const useMenu = () => {
    return useContext(MenuContext)
}

const MenuContextProvider = ({ children }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prevValue => !prevValue)
    }

    return (
        <MenuContext.Provider value={{isMenuOpen, toggleMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider