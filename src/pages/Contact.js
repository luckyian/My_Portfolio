import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h1>Contact</h1>

        </Card.Title>

        <Form>
          <Form.Group>
            <Form.Label for="exampleFormControlInput1">Name</Form.Label>
            <Form.Control type="email" className="form-control" id="exampleFormControlInput1"
              placeholder="Jane Doe"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label for="exampleFormControlInput1">Email address</Form.Label>
            <Form.Control type="email" className="form-control" id="exampleFormControlInput1"
              placeholder="name@example.com"></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label for="exampleFormControlTextarea1">Comments/Questions</Form.Label>
            <Form.Control id="exampleFormControlTextarea1" rows="3"></Form.Control>
          </Form.Group>
          <Button type="submit" className="btn btn-primary">Submit</Button>
        </Form>

      </Card.Body>
    </Card>


  );

}

export default Contact;
