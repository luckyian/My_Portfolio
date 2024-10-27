import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Project from "../components/Project";
import data from "../data/analytics.json";

function Contact() {

  return (
    <Container>
    <Card>
     <Project
     _id={data.projects[0]._id}
     cardTitle={data.projects[0].cardTitle}
     cardText={data.projects[0].cardText}
     src={data.projects[0].src}
     alt={data.projects[0].alt}
     project={data.projects[0].project}
     
     />
    </Card>
    </Container>

  );

}

export default Contact;
