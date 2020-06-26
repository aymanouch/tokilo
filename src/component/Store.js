import React, { Component } from "react";
import BigItems from "./store-app/BigItems";
import SelectionItem from "./store-app/SelectionItem";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <div id="store" className="part">
        <div className="left-box book">
          <BigItems />
        </div>
        <div className="right-box book">
          <SelectionItem />
        </div>
      </div>
    );
  }
}

export default Store;

Store.propTypes = {};
