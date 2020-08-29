import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
 
export default class School extends Component {

  render() {
    /* used to add colored line divider between header and text*/
    const ColoredLine = ({ color }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 2
          }}
      />
  );

    return (
      <div>
        <Container className="container-lg pt-4">
          <Jumbotron className="text-center">
            <h1>Rutgers University - New Brunswick</h1>
            <ColoredLine color="white" />
              <h2 className="text-center">Class of 2022</h2>
              <p className="text-left-school">Major: Computer Science</p>
              <p className="text-left-coursework">Course Work:</p>
              <ul className="text-indent">
                <li>
                  <a href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-111-introduction-to-computer-science" target="_blank" 
                  rel="noopener noreferrer">Intro to Comp Sci</a>
                </li>
                <li>
                  <a href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-112-data-structures" target="_blank" 
                  rel="noopener noreferrer">Data Structures</a>
                </li>
                <li>
                  <a href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-211-computer-architecture" target="_blank" 
                  rel="noopener noreferrer">Computer Architecture</a>
                </li>
                <li>
                  <a href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-214-systems-programming" target="_blank" 
                  rel="noopener noreferrer">Systems Programming</a>
                </li>
                <li>
                  <a href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-206-introduction-to-discrete-structures-ii" target="_blank" 
                  rel="noopener noreferrer">Discrete Structures 1 & 2</a>
                </li>
              </ul>
              <p className="text-left-school">Minor: Economics</p>
              <p className="text-left-coursework">Course Work:</p>
              <ul className="text-indent">
                <li>
                  <a href="https://economics.rutgers.edu/academics/undergraduate/courses-and-syllabi/courses/219-introductory-courses/789-01-220-103-introduction-to-macroeconomics-3" target="_blank" 
                  rel="noopener noreferrer">Macroeconomics</a>
                </li>
                <li>
                  <a href="https://economics.rutgers.edu/academics/undergraduate/courses-and-syllabi/courses/219-introductory-courses/788-01-220-102-introduction-to-microeconomics-3" target="_blank" 
                  rel="noopener noreferrer">Microeconomics</a>
                </li>
                <li>
                  <a href="https://economics.rutgers.edu/academics/undergraduate/courses-and-syllabi/courses/221-electives-that-only-count-towards-the-economics-minor/797-01-220-212-economic-data-analytics-introduction-to-data-management-statistics-and-regression-methods-for-decision-making-3" target="_blank" 
                  rel="noopener noreferrer">Econ Data Analytics</a>
                </li>
              </ul>
              
          </Jumbotron>
        </Container>
      </div>
    );
  }
}