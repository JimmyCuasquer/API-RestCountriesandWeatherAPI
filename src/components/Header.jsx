import React from "react";
import { Container,Navbar } from "react-bootstrap";
import "../styles/Header.css";
const Header = props =>{

return(

  
  <Navbar className="Header" variant="dark" bg="dark" >
    <Container>
      <Navbar.Brand href="/">List Countries</Navbar.Brand>
      <Navbar.Brand href="/SearchCountries">Search Countries Details</Navbar.Brand>
      </Container>
  </Navbar>
)

}
export default Header;