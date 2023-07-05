import React from "react";
import "./about.css";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

import { FaHandHoldingHeart } from "react-icons/fa";

import { logo, owner, owner1 } from "../../assets";
export const About = (props) => {
  return (
    <>
      <div className='about_container' ref={props.reference}>
        <h2>
          About Me!
          <FaHandHoldingHeart className="about_container_icon" color='#ef7e7e' size={50} />
        </h2>
        <div className='about_container_section'>
          <div className='about_container_image_section'>
            <img src={owner} alt='owner Image' />
          </div>
          <div className='about_container_text_section'>
            <p>
              <BiSolidQuoteAltLeft color='ef7e7e' /> Welcome to my website! 😊
              I'm Mayank Ladnge, an 18-year-old school student from Raipur. ✨ I
              have a passion for creating handmade gifts that bring joy to
              others. 🎁 Crafting makes me happy, especially when I see the
              happiness it brings to others. Each item I make, whether it's a
              bracelet, photo frame, or gift basket, is crafted with love and
              attention to detail. 💖✨ I believe that handmade gifts have a
              special touch that can't be replicated. Thank you for visiting,
              and I hope you find something that brings a smile to your face or
              to someone you care about. Let's spread happiness together through
              handmade treasures. 🌟🎉 <BiSolidQuoteAltRight color='ef7e7e' />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
