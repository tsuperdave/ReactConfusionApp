import React, { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Menu from "./components/MenuComponents";
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <h1>Hello From React</h1>
    </div>
  );
}
*/

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Confusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
