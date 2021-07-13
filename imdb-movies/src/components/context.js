import React, { useState, useContext} from 'react'
import useFetch from './useFetch'
export const API_ENDPOINT = process.env.REACT_APP_API_URL
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('MR Robot')
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }