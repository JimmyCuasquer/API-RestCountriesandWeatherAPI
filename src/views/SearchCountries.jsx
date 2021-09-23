import React,{useState} from "react";
import SearchForm from "../components/searchCountries/SearchForm";
import Country from "../components/searchCountries/Country";
import ErrorCountry from "../components/ErrorCountry";
import { Spinner } from "react-bootstrap";

import "../styles/Details/Details.css";
const SearchCountries = props => {

  const   [data, setData]= useState([])
  const   [name, setName]= useState(null)
  const [error, setError] =useState(false)
  const [loadig, setLoadig] = useState(false)  
  const HandleSearchCountryData = async (e) =>{
        e.preventDefault()
            setLoadig(true)    
        try {
            const API = `https://restcountries.com/v2/name/${name}?fullText=true`
            const response = await fetch(API)
            const result = await response.json()
            if (result.status){
                setError(result.message)
            }else{
                setData(result) 
                setError(false)
            }
            
            console.log(result)
            setTimeout(()=>{
                setLoadig(false)
            }, 1000)
                
        } catch (e) {
            console.log(e)
            setLoadig(false)
        }
        
    }

return(
    <>
        <SearchForm
        setName ={setName}
        HandleSearchCountryData={HandleSearchCountryData}
        />        
      {error ? (
                <ErrorCountry message={error} 
                />
            ):data.length > 0 && !loadig ? data.map((content, i) => (
                <Country
                name={content.name}
                flags={content.flags[0]}
                population={content.population}
                code={content.alpha2Code}
                region={content.region}
                capital={content.capital}
                key={i}
            />
        )): data && loadig ?(
            <div className="mt Spinner">
                <Spinner  animation="grow"/>
            </div>
            
        ): []} 
        
            </>
    )
}
export default SearchCountries;