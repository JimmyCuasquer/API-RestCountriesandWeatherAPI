import React from "react";
import { Card,Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import "../../styles/SearchForm/Country.css"
const Country = props =>{

const {flag, name, population, code, capital} = props;

return(
    <div>
<Card style={{  margin: "auto"  ,width: '30rem', marginTop:"50px" }}>
    <Card.Img variant="top" src={flag} alt={code}/>
        <Card.Body style={{margin:"auto"}}>
        <Card.Title className="name font-family">{name}</Card.Title>  
        <Card.Title> La cantidad de Habitantes en {name} es de {population}</Card.Title>
    </Card.Body>
    <Button variant="danger">
        <Link to={`/details/${capital}`}> Ver el clima de tu pais</Link></Button>
</Card>

    </div>
)
}
export default Country;