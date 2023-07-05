import React from "react";
import "./navbar.css";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineSearch } from "react-icons/ai";
import { FaHandHoldingHeart } from "react-icons/fa";
export default function Navbar(props) {
  const scrollTo = (refe) => {
    setTimeout(
      () =>
        refe.current.scrollIntoView({ inline: "center", behavior: "smooth" }),
      77
    );
  };
  const { reviewref, productref, contactref, aboutref } = props.reference;
  return (
    <>
      <div className='navbar_container' >
        <div className='navbar_container_logo'>
          <h1>
            Hand <FaHandHoldingHeart /> Made
          </h1>
        </div>
        <div className='navbar_container_links'>
          <p
            onClick={() => {
              scrollTo(aboutref);
            }}>
            <a href='#' className='navbar_container_link'>
              About
            </a>
          </p>
          <p
            onClick={() => {
              scrollTo(productref);
            }}>
            <a href='#' className='navbar_container_link'>
              Products
            </a>
          </p>
          <p
            
          onClick={() => {
              scrollTo(reviewref);
            }}>
            <a href='#' className='navbar_container_link'>
              Reviews
            </a>
          </p>
          <p
            onClick={() => {
              scrollTo(contactref);
            }}>
            <a href='#' className='navbar_container_link'>
              Contacts
            </a>
          </p>
        </div>
        <div className='navbar_container_icons'>
          <AiOutlineSearch className='navbar_container_icon' size={20} />
          <LuShoppingCart className='navbar_container_icon' size={20} />
        </div>
      </div>
      <div className='underline'></div>
    </>
  );
}
