import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from 'react-icons/fa6';
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
import { StarsCanvas } from "./canvas";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding bg-slate-900 min-h-[500px] py-16">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div 1stPart">
            <h4>
              <b><span>The E-Cell</span> SGGSIE&T</b>
            </h4>
            <a href="/">
              <p><b>Igniting ideas, inspiring futures</b></p>
            </a>
            <a href="/">
              <p>Vishnupri, Nanded, Maharashtra</p>
              <p><b>Pin Code:</b> 431606</p>
            </a>
            <a href="/">
              <p><b>Phone</b>: 6006513330</p>
            </a>
            <a href="/">
              <p><b>Email:</b> ecell@sggs.ac.in</p>
            </a>
            <div className="social-iicons mt-4 gap-3 flex justify-center items-center mr-40">
              <motion.a whileHover={{ y: -5 }} href="https://twitter.com/?lang=en" className="twitter flex items-center justify-center">
                <FaXTwitter style={{ fontSize: '2em' }} />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://www.facebook.com/" className="facebook flex items-center justify-center">
                <BsFacebook style={{ fontSize: '2em' }} />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://www.instagram.com/dhoranpankaj05/" className="instagram flex items-center justify-center">
                <BsInstagram style={{ fontSize: '2em' }} />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} href="https://in.linkedin.com/company/team-kautilya" className="linkedin flex items-center justify-center">
                <AiOutlineLinkedin style={{ fontSize: '2em' }} />
              </motion.a>
            </div>
          </div>

          <div className="sb_footer-links_div">
            <h4 className="font-bold">Quick Links</h4>
            <ul>
              <li className="footer-links">
                <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }} />
                <motion.a whileHover={{ y: -10 }} href="#home">Home</motion.a>
              </li>
              <li className="footer-links">
                <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }} />
                <motion.a whileHover={{ y: -10 }} href="#about">About us</motion.a>
              </li>
              <li className="footer-links">
                <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }} />
                <motion.a whileHover={{ y: -10 }} href="#gallery">Gallery</motion.a>
              </li>
              <li className="footer-links">
                <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }} />
                <motion.a whileHover={{ y: -10 }} href="#testimonials">Testimonials</motion.a>
              </li>
              <li className="footer-links">
                <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }} />
                <motion.a whileHover={{ y: -10 }} href="#ourstar">Events</motion.a>
              </li>
            </ul>
          </div>

          <div className="sb_footer-links_div">
            <h4 className="font-bold">Events</h4>
            <ul>
              <li className="footer-links">
                <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }} />
                <motion.a whileHover={{ y: -10 }} href="#">Ideation Workshop</motion.a>
              </li>
              <li className="footer-links">
                <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }} />
                <motion.a whileHover={{ y: -10 }} href="#">Aurdino Workshop</motion.a>
              </li>
              <li className="footer-links">
                <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }} />
                <motion.a whileHover={{ y: -10 }} href="#">Finance and Accounting Workshop</motion.a>
              </li>
              <li className="footer-links">
                <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }} />
                <motion.a whileHover={{ y: -10 }} href="#">In-House Training</motion.a>
              </li>
            </ul>
          </div>
        </div>

        <div className="sb_footer-below mt-6">
          <svg className="w-full h-24" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1D4ED8" fillOpacity="1" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,85.3C672,96,768,96,864,85.3C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V64Z"></path>
          </svg>

          <div className="sb_footer-copyright flex justify-center items-center w-full">
            <p className="text-white text-2xl font-semibold text-center mt-4 w-full">
              Copyright @2024-25 SGGSIE&T. All Rights Reserved. <br />
              Developed by Technical Team | E-Cell, SGGS
            </p>
          </div>
        </div>
      </div>

      <StarsCanvas />
    </div>
  );
};

export default Footer;
