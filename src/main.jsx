import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScreenContextProvider from './context/ScreenContext.jsx'
import CountriesContextProvider from './context/CountriesContext.jsx'
import FormContextProvider from './context/FormContext.jsx'
import FetchDataContextProvider from './context/FetchDataContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ScreenContextProvider>
    <CountriesContextProvider>
      <FormContextProvider>
        <FetchDataContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FetchDataContextProvider>
      </FormContextProvider>
    </CountriesContextProvider>
  </ScreenContextProvider>
)
