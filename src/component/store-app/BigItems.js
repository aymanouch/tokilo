import React, { Component } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import $ from "jquery";

class BigItems extends Component {
  constructor(props) {
    super(props);
    const product = require("../../json-file/product.json");
    this.state = { variable: 0, intervalId: 0, items: product.product, isFirst: true };
    this.toggleProduct = this.toggleProduct.bind(this);
  }
  componentDidMount() {
    this.setState({
      intervalId:setInterval(() => {
        this.toggleProduct(this.state.items);
      }, 3000)
    });
    let linkClick;
    $(".navbar .list ul li a").on("click", function () {
      linkClick = $(this).attr('data-detecte');
    })
    if(linkClick !=="store") {
      $(".navbar .list ul li a").on('click', () => {
        clearInterval(this.state.intervalId);
      })
    }
  }
  toggleProduct(arr) {
    const elt = document.querySelector("#store .cont-img");
    if (this.state.variable <   arr.length  && elt !== null) {
      this.setState({
        variable: this.state.variable + 1,
      });
      gsap.from(elt, {opacity:0, x: 2000});
    } else  {
      this.setState({
        variable: 0,
      });
    }
  }

  componentWillUmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    let img, item;
    if (this.state.items.length > 0 && this.state.variable < this.state.items.length) {
      img = (
        <img
          alt={this.state.items[this.state.variable].name}
          src={require(`../../image/products/${this.state.items[this.state.variable].img[0]}`)}
        />
      );
      item = this.state.items[this.state.variable];
    } else {
      img = (
        <img
          alt={this.state.items[0].name}
          src={require(`../../image/products/${this.state.items[0].img[0]}`)}
        />
      );
      item = this.state.items[0];
    }
    return (
      <div className="bigItems">
        <div className="cont-price">
          <span>{item.new_price}</span>
          <span className="currency">MAD</span>
        </div>
        <div className="cont-img">
          <div className="img-product">{img}</div>
        </div>
        <div className="info-product">
          <div className="date-issuance">{item.issuance}</div>
          <div className="name-product">{item.name} some text </div>
        </div>
        <div className="link-demande">
          <Link to={`/product/${item.name}`}>demande</Link>
        </div>
      </div>
    );
  }
}

export default BigItems;

BigItems.propTypes = {};
