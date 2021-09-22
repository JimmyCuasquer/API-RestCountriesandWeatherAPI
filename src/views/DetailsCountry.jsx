import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsClima from "../components/Details/DetailsClima";

const DetailsCountry= () =>{
    //const clima= {icon:`http://openweathermap.org/img/wn/${icon}@2x.png`}
    const {capital} = useParams({});
    console.log(capital);
   
   const[data, setData]= useState(null)
   //const[clima, setClima]= useState({})
    const FetchDataApi = async  () => {
        //e.preventDefault();
    try {
    const key="e4bdb727c318dcfa4eb00a8b9a6bf2e6"                    
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${key}`
   
        const response = await fetch(API)
        const result = await response.json()
        setData(result)
        console.log(result) 
        
    } catch (error) {
        console.log(error)
    } 

    } 
    console.log(data)
    useEffect(()=>{
    FetchDataApi();
    },[])


    return(

        data && (<DetailsClima   
            description={data.weather[0].description}  
            icon={data.weather[0].icon}
            temp={data.main.temp}
            
            data={data}
          />
        )
        
    
    
    )
}
export default DetailsCountry;