import React from 'react';
import Navigation from './nav/Navbar.js';

import {
  Route,
  HashRouter
} from 'react-router-dom';

import HomePage from './homepage/homepage.js';
import Projects from './projects/projects.js';
import School from './school/school.js'
import Extras from './extras/extras.js'
import './css/bootstrap.css';



function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation />
        <Route exact path='/' component={HomePage}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/school' component={School}/>
        <Route path='/extras' component={Extras}/>
      </div>
    </HashRouter>
  );
}

export default App;
