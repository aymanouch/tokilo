import React from "react";
import gsap from "gsap";
import $ from 'jquery';
import img1 from '../image/contact.svg';
const Contact = () => {
    return (
        <div className="contact part" id="contact">
            <div className="contact-top">
               <div className="contact-img">
                   <img alt="contact" src={img1} />
               </div>
               <div className="contact-form">
                   <form>
                      <div className="sec-from">
                      <label>first name</label>
                       <input type="text" onClick={(e) => {gereClick(e)}}/>
                      </div>
                      <div className="sec-from">
                      <label>last name</label>
                       <input type="text" onClick={(e) => {gereClick(e)}}/>
                      </div>
                      <div className="sec-from">
                      <label>email</label>
                       <input type="email" className="email" onClick={(e) => {gereClick(e)}}/>
                      </div>
                      <div className="sec-from">
                      <label>phone</label>
                       <input type="number" onClick={(e) => {gereClick(e)}}/>
                      </div>
                      <div className="sec-from">
                       <input type="submit" value="send"className="send" onClick={(e) => {e.preventDefault()}}/>
                      </div>
                   </form>
               </div>
            </div>
            <div className="contact-bottom">
               <div className="contact-link">
                   <div className="phone-number bo-box">
                         <h3>number phone</h3>
                         <div className="num-pho"><a href="https://wa.me/212679658971">0634074517</a></div>
                         <div className="num-pho"><a href="https://wa.me/212679658971">0634074517</a></div>
                         <div className="num-pho"><a href="https://wa.me/212679658971">0634074517</a></div>
                   </div>
               </div>
            </div>

        </div> 
    );
}
function gereClick(e) {
  const elt =  $(e.target);
  console.log(elt);
  gsap.to(elt, {outlineWidth:"1px", outlineColor:'#1569d8', outlineStyle:"solid", duration:.1});
  gsap.to(elt.parent('.sec-from').siblings().find('input'), {outline:"none"})
}
export default Contact;