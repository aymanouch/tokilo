import React, { Component } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import $ from "jquery";
import imgNav from "../image/img-nav.png";
import logo from "../image/logo.png";
const listNav = ["home", "about", "store", "contact"];
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowing: true };
  }

  handleClick = () => {
    hiSoBar(
      ".navbar",
      ".navbar .box-left",
      ".navbar .img-nav",
      "#social-media a",
      "#logo"
    );
    this.props.anime();
    $('html, body').animate({
      scrollTop: 0
    });
  };
  handleClick2 = () => {
    soHiBar(
      ".navbar",
      ".navbar .box-left",
      ".navbar .img-nav",
      "#social-media a",
      "#logo"
    );
    
  };
  render() {
    const social = (
      <>
        <a href="https://twitter.com/Tokilo5" target="_blank">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/Tokilo-officiel-109037464195075/" target="_blank">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/tokilo_officiel/" target="_blank">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="mailto:Tokilo.shop@gmail.com" target="_blank">
          <i className="fa fa-google"></i>
        </a>
      </>
    );
    return (
      <div className="navbar">
        {/* stat the box left for show and hide navbar  */}
        <div className="box-left">
          {/* logo */}
          <div id="logo" className="child-left">
            <img alt="soo9e" src={logo} />
          </div>
          {/* icon for the navbar */}
          <div id="barmenu" className="child-left">
            <i className="fa fa-bars" onClick={this.handleClick2}></i>
          </div>
          {/* social media link */}
          <div id="social-media" className="child-left">
            {social}
          </div>
        </div>
        {/* list of the link  */}
        <div className="list">
          <ul>
            {listNav.map((item) => (
              <li key={item}>
                <Link
                  to={item === "home" ? "/" : `/${item}`}
                  onClick={this.handleClick}
                  data-detecte = {item}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* strat number */}
        <div className="number">
          <a href="tel:+212679658971" target="_blank"><i className="fa fa-phone"></i> +212679658971</a>
        </div>
        <div className="img-nav">
          <img alt="shoes" src={imgNav} />
        </div>
        <div className="logoright">
          <img alt="soo9e" src={logo} />
        </div>
        <div className="socialright">{social}</div>
        <dic className="closeNav" onClick={this.handleClick }><i className="fa fa-align-left"></i></dic>
      </div>
    );
  }
}
//
function hiSoBar(eltHide, eltShow, shoesImg, social, logo) {
  const leftSize = window.innerWidth > 770 ? "-44%" : "-88%";
  const tewen = gsap.timeline();
  tewen
    .to(eltHide, { left: leftSize })
    .to(shoesImg, { opacity: 0 })
    .to(eltShow, { visibility: "visible" })
    .from(eltShow, { opacity: 0 })
    .from(social, { height: 0, duration: 0.3, opacity: 0 })
    .from(logo, { opacity: 0 });
}
function soHiBar(eltHide, eltShow, shoesImg, social, logo) {
  const tewen = gsap.timeline();
  tewen
    .to(eltShow, { visibility: "hidden" })
    .from(eltShow, { opacity: 1 })
    .to(eltHide, { left: "0" }, "-=.8")
    .to(shoesImg, { opacity: 1 });
}

export default Navbar;

Navbar.propTypes = {};
