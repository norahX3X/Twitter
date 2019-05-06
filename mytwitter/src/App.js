import React from 'react';
import './App.css';
import Navigations from './Navigations';
import Cards from './Cards'
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div>
      <Navigations />
      <Cards />
      <Cards />
    </div>
  );
}

export default App;
