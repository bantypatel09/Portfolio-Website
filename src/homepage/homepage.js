import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import profilepic from "../assets/profilepic.jpg"

export default class HomePage extends Component {
  
  render() {
    return (
      <div>
        <Container className="container-lg pt-4">
          <Jumbotron className="text-center">
            <Container className="container-bottom">
            <h1>Hi I'm Banty Patel!</h1>
            </Container>
            <img class="image" src={profilepic} alt=""></img>
            <h1>A Little Bit About Myself…</h1>
            <p className="personal-info">I am an aspiring Computer Scientist student at Rutgers University seeking to expand my knowledge 
              through internships/jobs. I enjoy programming and find solving problems with algorithms very exciting. When I’m not programming, 
              I often spend my free time watching movies and TV shows or playing video games with my friends. I also spend much of my time participating 
              in recreational sports and working out (although COVID-19 hasn’t been the kindest to my body). And that just about covers who I am, Thank you.</p>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
