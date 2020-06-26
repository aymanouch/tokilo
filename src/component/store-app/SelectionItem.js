import React, { Component } from "react";
import Card from "./Card";
import gsap from "gsap";
import { Link } from "react-router-dom";
const product = require("../../json-file/product.json");
const Slide = (props) => {
  return props.value.map((item) => {
    return (
      <div className="slide" key={props.value.indexOf(item)}>
        {item.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
    );
  });
};
class SelectionItem extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 1 };
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
  }
  handleClickNext() {
    const slideIndex = this.state.variable,
      myElt = product.product;
    if (slideIndex < calculFour(myElt)) {
      gsap.to(`.slide:nth-child(${slideIndex})`, { left: "-100%" });
      gsap.to(`.slide:nth-child(${slideIndex + 1})`, { left: "0%" });
      this.setState({
        variable: this.state.variable + 1,
      });
      const scrTop = document.querySelector('#store .right-box').offsetTop;
      gsap.to('html, body',{scrollTop:scrTop})
    }
  }
  handleClickPrev() {
    const slideIndex = this.state.variable;
    if (slideIndex > 1) {
      gsap.to(`.slide:nth-child(${slideIndex})`, { left: "100%" });
      gsap.to(`.slide:nth-child(${slideIndex - 1})`, { left: "0%" });
      this.setState({
        variable: this.state.variable - 1,
      });
      const scrTop = document.querySelector('#store .right-box').offsetTop;
      gsap.to('html, body',{scrollTop:scrTop})
    }
  }
  render() {
    const arrDiv = makeSlide(product.product);
    return (
      <div className="selection item">
        <div className="cont-slider">
          <Slide value={arrDiv} />
        </div>
        <div className="cont-control">
          <div className="left-control">
            <span className="prev" onClick={this.handleClickPrev}>
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </span>
            <span className="num-page">
              {this.state.variable}/{calculFour(product.product)}
            </span>
            <span className="next" onClick={this.handleClickNext}>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </div>
          <div className="right-control">
            <Link to="/all_product" onClick={()=> {gsap.to("html, body", {scrollTop:0})}}>
              all product<span></span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
function calculFour(arr) {
  let compteur = 0;
  const leng = arr.length;
  if (leng % 4 > 0) compteur++;
  compteur = parseInt(leng / 4) + compteur;
  return compteur;
}
function makeSlide(arr) {
  let myArr = [];
  for (let i = 0; i < calculFour(arr); i++) {
    myArr.push([]);
  }
  let j = 0,
    i = 0;

  for (j = 0; j < arr.length; j++) {
    if (j % 4 !== 0 || j === 0) {
      myArr[i].push(arr[j]);
    }
    if (j % 4 === 0 && j !== 0) {
      myArr[i + 1].push(arr[j]);
      i++;
      continue;
    }
  }
  return myArr;
}
export default SelectionItem;

SelectionItem.propTypes = {};
