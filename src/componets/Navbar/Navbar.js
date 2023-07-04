import React from "react";
import "./navbar.css";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineSearch } from "react-icons/ai";
import { FaHandHoldingHeart } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
      <div className='navbar_container'>
        <div className='navbar_container_logo'>
          <h1>Hand <FaHandHoldingHeart/> Made</h1>
        </div>
        <div className='navbar_container_links'>
          <p>
            <a href='#' className='navbar_container_link'>
              About
            </a>
          </p>
          <p>
            <a href='#' className='navbar_container_link'>
              shop
            </a>
          </p>
          <p>
            <a href='#' className='navbar_container_link'>
              Artist
            </a>
          </p>
          <p>
            <a href='#' className='navbar_container_link'>
              stores
            </a>
          </p>
        </div>
        <div className='navbar_container_icons'>
          <AiOutlineSearch className="navbar_container_icon" size={20} />
          <LuShoppingCart className="navbar_container_icon" size={20} />
        </div>
      </div>
      <div className='underline'></div>
    </>
  );
}
