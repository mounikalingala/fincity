import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import About from './About';
import Home from './Home';
import Projects from './ProjectsList';
import Contacts from './Contacts';
import './App.css';
import AddProject from './AddProject';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/projects' Component={AddProject} />
        <Route path='/about' Component={About} />
        <Route path='/contacts' Component={Contacts} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
