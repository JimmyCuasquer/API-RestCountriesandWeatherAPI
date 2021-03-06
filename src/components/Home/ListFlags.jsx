import React from "react";
import { Card } from "react-bootstrap";

const ListFlags = props => {

    const { name, flags, data}= props
    //console.log(data)
    return(
        
        data.length > 0 && 
        <Card style={{  margin: "auto",width: '30rem', marginTop:"50px" }}>
            <Card.Img variant="top" src={flags} />
            <Card.Body style={{margin:"auto"}}>
                <Card.Title >{name}</Card.Title>
            </Card.Body>
        </Card>
    )
}
export default ListFlags;