import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/Details/Details.css";

const DetailsClima = props =>{
const {temp,description, data,icon } =props;
    
console.log(temp)

return(
        <>
        <div className="content">
            <div>
            <img className="imgs" src="https://i.pinimg.com/originals/70/75/41/70754199a81f77b22619f7c3ed6446f7.gif"></img>
            </div>
        <div className="texto-encima">
        {data && (
        <Card className="cardDetails">
        <img className="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <Card.Body>
        <Card.Title> Estado del tiempo : {description}</Card.Title>
        <Card.Title>Temperatura de {temp ? (temp - 273.15) : "Sin datos"} °C</Card.Title>
        </Card.Body>
        <Link className="back" to="/SearchCountries">Consultar otro clima</Link> 
        </Card>)}
        </div>        
        </div>
        
        </>
       
      
    )
}

export default DetailsClima;