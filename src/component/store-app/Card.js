import React, { Component } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  goToLink = (e) => {
    const myPrice = e.target.parentNode.childNodes[0],
      name = e.target.parentNode.childNodes[2],
      winWid = window.innerWidth;
    if (winWid > 760) {
      var teween = gsap.timeline();
      teween
        .to(myPrice, { opacity: 1, y: 0 })
        .to(name, { opacity: 1, y: 0 }, "-=.5");
    }
  };
  goFromLink = (e) => {
    const myPrice = e.target.parentNode.childNodes[0],
      name = e.target.parentNode.childNodes[2],
      winWid = window.innerWidth;
    if (winWid > 760) {
      var teween = gsap.timeline();
      teween
        .to(myPrice, { opacity: 0, y: -200 })
        .to(name, { opacity: 0, y: 200, duration: 1.1 }, "-=.5");
    }
  };
  scrollToZero = () => {
    gsap.to('html, body', {scrollTop:0});
  }
  render() {
    return (
      <div
        className="card"
        onMouseEnter={(e) => {
          this.goToLink(e);
        }}
        onMouseLeave={(e) => {
          this.goFromLink(e);
        }}
        style={checkColor(this.props.color)}
      >
        <div className="price">{this.props.card.new_price} <span className="omla">MAD</span></div>
        <div className="img-cont">
          <img
            alt={this.props.card.name}
            src={require(`../../image/products/${this.props.card.img[0]}`)}
          />
        </div>
        <div className="name">{this.props.card.name}</div>
        <Link to={`/product/${this.props.card.name}`} onClick={this.scrollToZero}></Link>
      </div>
    );
  }
}
function checkColor(color) {
  /* addd nice color */
  if(color !== undefined ) {
   return  {backgroundImage : color}
  } else {
    return null;
  }
}

export default Card;

Card.propTypes = {};
