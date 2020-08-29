import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import github from "../assets/github.jpg"

export default class Projects extends Component {
  
  render() {
    /* used to add colored line divider between header and text*/
    const ColoredLine = ({ color }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 1
          }}
      />
  );

    return (
      <div>
        <Container className="container-lg pt-4">
          <Jumbotron className="text-center">
            <h1>My Projects</h1>
          </Jumbotron>
          <Jumbotron>
            <h4>Put Me On</h4>
            <ColoredLine color="white" />
            <ul>
              <li className="bullet-unindent">
                Website built using <b>React</b> to recommend artists that are linked to your favorite musicians
              </li>
              <li className="bullet-unindent">
                Artist linking is done through the incorporation of the <b>Spotify API</b>
              </li>
              <li className="bullet-unindent">
                Programmed in <b>JavaScript/HTML</b> and deployed using <b>Heroku</b> saving annually on website hosting
              </li>
            </ul>
            <a href="https://github.com/bantypatel09/PutMeOn" target="_blank" rel="noopener noreferrer"> 
              <img class="image-github" src={github} alt=""></img>
            </a>  
          </Jumbotron>
          <Jumbotron>
            <h4>Worth The Weight</h4>
            <ColoredLine color="white" />
            <ul>
              <li className="bullet-unindent">
              	App built in <b>Java</b> with <b>Android Studio</b> to motivate individuals to continue pursuing a healthier lifestyle
              </li>
              <li className="bullet-unindent">
              	Filled with workouts that cater to many different types of exercises as well as recipes for nutritious meals
              </li>
            </ul>
            <a href="https://github.com/bantypatel09/WorthTheWeight" target="_blank" rel="noopener noreferrer"> 
              <img class="image-github" src={github} alt=""></img>
            </a>  
          </Jumbotron>
          <Jumbotron>
            <h4>Weather Web</h4>
            <ColoredLine color="white" />
            <ul>
              <li className="bullet-unindent">
                Website that keeps track of the weather based on location provided
              </li>
              <li className="bullet-unindent">
                Uses the <b>OpenWeatherAPI</b> to obtain weather information
              </li>
              <li className="bullet-unindent">
                Pages were desgined using <b>React</b>
              </li>
            </ul>
          </Jumbotron>
          <Jumbotron>
            <h4>Portfolio Website</h4>
            <ColoredLine color="white" />
            <ul>
              <li className="bullet-unindent">
                Website programmed in JavaScript/HTML which was built upon the use of <b>React</b>
              </li>
              <li className="bullet-unindent">
                Provides a deeper insight of who I am and serves as a showcase for all my CS work
              </li>
            </ul>
          </Jumbotron>
          <Jumbotron>
            <h4>GIT Replica</h4>
            <ColoredLine color="white" />
            <ul>
              <li className="bullet-unindent">
                A version control system built in <b>C</b> that establishes a TCP/IP network connection allowing users to access a server’s files
              </li>
              <li className="bullet-unindent">
                Incorporates multi-threading to allow connections to multiple clients
              </li>
            </ul>
          </Jumbotron>
          <Jumbotron>
            <h4>File Compressor</h4>
            <ColoredLine color="white" />
            <ul>
              <li className="bullet-unindent">
                Program built in <b>C</b> that allows users to compress any text file into binary code and back saving space on memory
              </li>
            </ul>
          </Jumbotron>
          <Jumbotron>
            <h4>Hexadoku Solver</h4>
            <ColoredLine color="white" />
            <ul>
              <li className="bullet-unindent">
                Prgrogram built in <b>C</b> that can finish a 16x16 hexadoku
              </li>
            </ul>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
