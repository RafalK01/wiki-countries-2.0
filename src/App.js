import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import { Routes, Route } from "react-router-dom"
import CountryDetails from "./components/CountryDetails";
import axios from "axios"

const apiURL = "https://ih-countries-api.herokuapp.com/countries"



function App() {

  const [countries, setCountries] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {

    axios.get(apiURL)
      .then((response) => {
        setCountries(response.data)
        setFetching(false)
      })

  }, [])



  return (
    <div className="App">
        <Navbar />
        {fetching && <p>Loading ...</p>}
      <div className="body">

        <CountriesList countries={countries}/>

        <Routes>
        <Route path="/:countryCode" element={ <CountryDetails countries={countries} /> } /> 
        </Routes>

      </div>
    </div>
  )
}

export default App;