import React from "react";
import { Link } from "react-router-dom";
const Home = () => (
  <div id="home" className="part">
    <div className="img-intro">
    </div>
   
    <div className="intro-title">
      <h1><strong>tokilo</strong> the best place to get great products and &amp; accessories</h1>
    </div>
    <div className="text">
      <p className="en-text">
      We have a nice clothes and accessories store, of course, with a suitable price that you can check out now.
      </p>
      <p className="en-text">
      just in tokilo customer is king king never bargains.
      </p>
      <p className="ar-text">
      لدينا متجر جميل للملابس و اكسسورات  بالطبع مع أثمنة مناسبة يمكنكك تفقده الأن 
      </p>
    </div>
    <div className="store-btn">
      <Link to="/store">shop</Link>
    </div>
  </div>
);
export default Home;

Home.propTypes = {};
