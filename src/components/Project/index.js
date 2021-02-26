import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


function Project(props) {

    return (
        
        <Card.Body>
        <Card.Title className="align-middle">{props.cardTitle}</Card.Title>
        <Card.Img src={props.src} alt={props.alt}></Card.Img>
           <Card.Text className="align-middle">{props.cardText}</Card.Text>
            <br></br>
            <Card.Link className="align-middle" href={props.github}>{props.github}</Card.Link>
            <br></br>
            <Card.Link className="align-middle" href={props.project}>Find it at: {props.cardTitle}</Card.Link>

       </Card.Body>
       
    );
}

export default Project;