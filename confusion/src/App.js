import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from "./components/MenuComponents";
import './App.css';
import { DISHES } from "./shared/dishes";

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

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Confusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}

export default App;
