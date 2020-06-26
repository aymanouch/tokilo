import React, { Component } from "react";
import deliv from "../image/deliverer.svg";
import contact from "../image/contact.svg";
import pay from "../image/pay.svg";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <div id="about" className="about part">
        <div className="text-about">
          <div className="item-about one">
            <h1>توصيل مجاني</h1>
            <img alt="delivration gratuit" src={deliv} />
          </div>
          <div className="item-about tow">
            <h1>استلم و ادفع</h1>
            <img alt="payment" src={pay} />
          </div>
          <div className="item-about three">
            <h1>تواصل معنا </h1>
            <img alt="contact us" src={contact} />
          </div>
          <div className="how-us">
            <h3>من نحن</h3>
            <p>
            سلام عليكم من نحن  نحن عبارة عن شركة مبيعات في مدينة مكناس و حاليا اصبحنا نقدم خداماتنا
             و منتوجاتنا على انترنيت للمزيد تواصل معنا عبر مواقع تواصل اجتماعي
              كما ان موقعنا حالي هو تجربي فقط لنرى جودة التسوق من انترنيت في المغرب و مكناس
            </p>
          </div>
        </div>
        <div className="img-about"></div>
      </div>
    );
  }
}

export default About;

About.propTypes = {};
