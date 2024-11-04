import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <>
    <div className="contenar contact" id="contact">
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
        data-aos="zoom-in-up"
         data-aos-duration="1000"
      >
        <a href='https://www.google.com'  target='_blark'  className="items">
          <FaSquareInstagram  className='icons'/>
        </a>
        <a  href='https://www.google.com'  target='_blark'className="items">
          <FaFacebook className='icons'/>
        </a>
        <a  href='https://www.google.com'  target='_blark'className="items">
          < FaXTwitter className='icons'/> 
        </a>
        <a href='https://www.google.com'  target='_blark' className="items">
         <FaLinkedin className='icons'/>
        </a>
        <a  href='https://www.google.com'  target='_blark'className="items">
          <FaGithub className='icons'/>
        </a>
        <a  href='rishabhsharma.rs1747@gmial.com'  target='_blark'className="items">
          < CgMail className='icons'/>
        </a>
      </div>
    </div>
    </>
  )
}

export default Contact
