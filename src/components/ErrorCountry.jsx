import React from "react";
import { Alert } from "react-bootstrap";
const ErrorCountry = props =>{
const {message} =props;
return(
    <>
    <Alert variant="danger mt">
    <h1>{message}</h1>
    <h1>La busqueda no se pudo completar porque
        no se encontro resultados. 
    </h1>
  
  </Alert>
    
    </>
)

}
export default ErrorCountry;