import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

export default class HomePage extends Component {
  
  render() {
    return (
      <div>
        <Container className="container-lg pt-4">
          <Jumbotron>
              <h3>Contact me</h3>
              <p>Email: bantypatel8242217@gmail.com</p>
              <h3>Check me out on social media</h3>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
