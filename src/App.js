import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <Button variant="primary"> Button</Button>
    </div>
  );
}

export default App;
