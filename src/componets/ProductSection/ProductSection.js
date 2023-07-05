import { React, useState } from "react";
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
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
  product21,
} from "../../assets";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductSection(props) {
  const [productToggle, setproductToggle] = useState(false);

  const productToggleButton = () => {
    setproductToggle(true);
  };

  return (
    <>
      <div className='product_section_container' ref={props.reference}>
        <div className='product_section_heading'>
          <p>
            Product Gallary{" "}
            <BsImageFill
              className='product_section_icon'
              color='ef7e7e'
              size={40}
            />{" "}
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
        {!productToggle ? (
          <div className='product_section_button' onClick={productToggleButton}>
            View More Items.
          </div>
        ) : (
          <ExtraProductSection toggleState={setproductToggle} reference={props.reference} />
        )}
      </div>
    </>
  );
}

const ExtraProductSection = (props) => {
  // const {}
  const productToggleButtonOff = () => {
    props.toggleState(false);
    setTimeout(
      () =>
        props.reference.current.scrollIntoView({ inline: "center", behavior: "smooth" }),
      77
    );
  };

  return (
    <>
      <div className='product_section_flex'>
        <ProductCard image={product5} />
        <ProductCard image={product8} />
        <ProductCard image={product9} />
      </div>
      <div className='product_section_flex'>
        <ProductCard image={product10} />
        <ProductCard image={product11} />
        <ProductCard image={product12} />
      </div>
      <div className='product_section_flex'>
        <ProductCard image={product13} />
        <ProductCard image={product14} />
        <ProductCard image={product15} />
      </div>
      <div className='product_section_flex'>
        <ProductCard image={product16} />
        <ProductCard image={product17} />
        <ProductCard image={product18} />
      </div>
      <div className='product_section_flex'>
        <ProductCard image={product19} />
        <ProductCard image={product20} />
        <ProductCard image={product21} />
      </div>

      <div className='product_section_button' onClick={productToggleButtonOff}>
        View Less Items.
      </div>
    </>
  );
};
