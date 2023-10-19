import React from 'react'
import { Routes, Route } from "react-router-dom"
import styles from "./App.module.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import KnowCarbonMonoxide from "./pages/KnowCarbonMonoxide"
import GreenHacks from "./pages/GreenHacks"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="know-carbon-monoxide" element={<KnowCarbonMonoxide />} />
        <Route path="green-hacks" element={<GreenHacks />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
