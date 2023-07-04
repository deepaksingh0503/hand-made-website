import React from "react";
import "./home.css";
import { BsBalloonHeartFill } from "react-icons/bs";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
} from "../../assets";
export default function Home() {
  return (
    <>
      <div className='home_container'>
        <div className='home_flex1'>
          <div className='home_flex1_heading'>
            <p>Handmade Gift's for Your</p>
            <p>
              {" "}
              <span style={{ color: "#ef7e7e" }}> Loved</span> one's{" "}
              <BsBalloonHeartFill size={40} color='ef7e7e' />
            </p>
            <h3 style={{ marginTop: "30px" }}>
              <BiSolidQuoteAltLeft color='ef7e7e' /> Gifts that are made with
              love and care, and that will last a lifetime.{" "}
              <BiSolidQuoteAltRight color='ef7e7e' />
            </h3>
          </div>
          <div className='home_flex1_image'>
            <img src={product5} alt='product image' />
            <p>
              <BiSolidQuoteAltLeft color='ef7e7e' /> You're like a star, you're
              so bright and you make me feel special.{" "}
              <BiSolidQuoteAltRight color='ef7e7e' />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
