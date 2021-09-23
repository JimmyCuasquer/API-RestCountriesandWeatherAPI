import React, {useEffect, useState} from "react";
import ListFlags from "../components/Home/ListFlags"

const Home = () =>{
    //state
    const [data, setData] = useState([]);
    
    //API
    const fetchDataApi = async() =>{
        try {
            const API = "https://restcountries.com/v2/all";
            const response = await fetch(API)
            const data = await response.json();
            setData(data)
            console.log(data)  
           
        } catch (error) {
           console.log(error) 
        }
        
    };
    //registre un cambio, solamente cuando se ejecute. para evitar que ejecute a 
    useEffect(() =>{
        fetchDataApi()
    },[])
    
    return(

            data.length> 0 && data.map((valor,i) => 
            <ListFlags 
                name={valor.name}
                flags={valor.flags[0]}
                key={i}
                data={data}
            />
            )
    )
}
export default Home;