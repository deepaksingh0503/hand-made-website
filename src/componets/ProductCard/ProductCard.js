import React from "react";
import "./productCard.css";
export default function ProductCard(props) {
  return (
    <>
      <div className='product_card_container' >
        <img src={props.image} alt='product image' />
      </div>
    </>
  );
}
