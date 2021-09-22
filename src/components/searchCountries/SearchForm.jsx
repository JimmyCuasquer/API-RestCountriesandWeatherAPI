import React from "react";
import { Form,Row,Col,Button } from "react-bootstrap";
import "../../styles/SearchForm/Form.css";
const SearchForm = props=>{

const  {setName, HandleSearchCountryData} = props;
   
return(
        <Form className="Form"  onSubmit={HandleSearchCountryData}
        >
        
        <Row className="align-items-center">
          <Col xs="auto">
          <h1 className="font-family"> Consulta tu Pais</h1>
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Ingrese en Pais"
              required="required"
              onChange={e =>setName(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2" >
              Buscar Pais
            </Button>
          </Col>
        </Row>
      </Form>    
    )

}
export default SearchForm;