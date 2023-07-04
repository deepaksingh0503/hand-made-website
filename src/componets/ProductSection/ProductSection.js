import React from "react";
import "./productSection.css";

import { BsImageFill } from "react-icons/bs";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
} from "../../assets";
import ProductCard from "../ProductCard/ProductCard";
export default function ProductSection() {
  return (
    <>
      <div className='product_section_container'>
        <div className='product_section_heading'>
          <p>
            Product Gallary <BsImageFill color='ef7e7e' size={40} />{" "}
          </p>
        </div>
        <div className='product_section_flex'>
          <ProductCard image={product1} />
          <ProductCard image={product6} />
          <ProductCard image={product3} />
        </div>
        <div className='product_section_flex'>
          <ProductCard image={product4} />
          <ProductCard image={product7} />
          <ProductCard image={product2} />
        </div>
        <div className="product_section_button">
          View More Items.
        </div>
      </div>
    </>
  );
}
