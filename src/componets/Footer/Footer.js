import React from "react";
import "./footer.css";

import {
  FaInstagram,
  FaFacebookSquare,
  FaFacebook,
  FaPhoneAlt,
  FaYoutube,
  FaUserFriends,
} from "react-icons/fa";

import { FiMail } from "react-icons/fi";
export const Footer = () => {
  return (
    <>
      <div className='footer_container'>
        <p>
          Contact and Social's <FaUserFriends size={40} color='ef7e7e' />
        </p>
        <div className='footer_container_social'>
          <FaInstagram
            className='footer_instagram_icon footer_icon'
            size={50}
            color='ef7e7e'
          />

          <FaFacebook
            className='footer_facebook_icon footer_icon'
            size={50}
            color='ef7e7e'
          />
          <FaPhoneAlt
            className='footer_phone_icon footer_icon'
            size={50}
            color='ef7e7e'
          />
          <FaYoutube
            className='footer_youtube_icon footer_icon'
            size={50}
            color='ef7e7e'
          />
          <FiMail
            className='footer_mail_icon footer_icon'
            size={50}
            color='ef7e7e'
          />
        </div>
      </div>
    </>
  );
};
