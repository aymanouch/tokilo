import React, { Component } from "react";
import Size from '../component/store-app/Size';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }
  handeleClick = (e) => {
    console.log(this.props.value);
    this.setState({
      index: parseInt(e.target.getAttribute("data-index")),
    });
  };
  render() {
    let index = this.state.index;
    return (
      <div className="anime" id="product">
        <div className="img_prod book">
          <div className="cont-img">
            <div className="back"></div>
            <img
              className="img-big"
              alt={this.props.value.name}
              src={require(`../image/products/${this.props.value.img[index]}`)}
            />
          </div>
          <div className="slide-img">
            {this.props.value.img.map((item, index) => (
              <img
                alt={this.props.value.name}
                src={require(`../image/products/${item}`)}
                data-index={this.props.value.img.indexOf(item)}
                key={index}
                onClick={(e) => {
                  this.handeleClick(e);
                }}
              />
            ))}
          </div>
        </div>
        <div className="info_prod book">
          <h1>{this.props.value.name}</h1>
          <div className="box-price">
            <span>
              {this.props.value.new_price} <span>MAD</span>
            </span>
            <span className="prec">
              {this.props.value.prec_price} <span>MAD</span>
            </span>
          </div>
          <Size size={this.props.value.size !== undefined  ? this.props.value.size : []}/>
          <div className="buy-section">
            <h3>buy</h3>
            <a className="fb-btn btn" href="https://m.me/tokiloofficiel" target="_blank">
            <i className="fa fa-facebook"></i> facebook
            </a>
            <a className="wa-btn btn" href="https://wa.me/212617261814" target="_blank">
            <i className="fa fa-whatsapp"></i> whatsapp
            </a>
          </div>
          <div className="descri">
            <p>{this.props.value.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;

Product.propTypes = {};
