import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Store from "./component/Store";
import Product from "./component/Product";
import About from "./component/About";
import Contact from "./component/Contact";
import Allproduct from "./component/Allproduct";
import "./App.scss";
import gsap from "gsap";

let product = require("./json-file/product.json");
class App extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
  }
  componentDidUpdate() {
    gsap.from(".part", { x: 2000, opacity: 0, duration: 1.2 });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar
            anime={() => {
              this.setState({ toggle: !this.state.state });
            }}
          />
          <div className="container">
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/store">
              <Store />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/all_product">
              <Allproduct value={product.product}/>
            </Route>
            {product.product.map((item) => {
              return (
                <Route path={`/product/${item.name}`} key={item.id} exact>
                  <Product value={item} />
                </Route>
              );
            })}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
