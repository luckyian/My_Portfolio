import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


function Project(props) {

    return (
        
        <Card.Body style="text-decoration-color: whitesmoke;">
        <Card.Title style="text-decoration-color: whitesmoke;">{props.cardTitle}</Card.Title>
        <Card.Img src={props.src} alt={props.alt}></Card.Img>
           <Card.Text className="align-middle">{props.cardText}</Card.Text>
            <br></br>
            <Card.Link className="align-middle" href={props.github}>{props.github}</Card.Link>
            <br></br>
            <Card.Link className="align-middle" href={props.project}>Find it at: {props.title}</Card.Link>

       </Card.Body>
       
    );
}

export default Project;