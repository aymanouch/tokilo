import React from 'react';
import Card from "./store-app/Card";
 const arrColor = ["linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)", 
 "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)", 
 "linear-gradient(19deg, #FAACA8 48%, #DDD6F3 100%)", 
 "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)", 
 "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
 "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
 "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
 "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
 "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
 "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)", 
 "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)", 
 "linear-gradient(19deg, #FAACA8 48%, #DDD6F3 100%)", 
 "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)", 
 "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
 "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
 "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
 "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
 "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
 "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)", 
 "linear-gradient(90deg, #FEE140 0%, #FA709A 100%)", 
 "linear-gradient(19deg, #FAACA8 48%, #DDD6F3 100%)", 
 "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)", 
 "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
 "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
 "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
 "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
 "linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)"]; 
const Allproduct = (props) => {
    return (
        <div className="all-product part" id="allproduct">
            {props.value.map((item, index) => {
                return <Card card={item} key={item.id} color={calculItemColor(props.value.length, index, arrColor)} />;
            })}
        </div>
    );
}
function calculItemColor(lent, index, arrColor) {
   if(lent <= arrColor.length) {
    return arrColor[index];
  } 
}
export default Allproduct;