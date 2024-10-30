import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footerText">
        &copy; Copyright || {new Date().getFullYear()} || Lukman Abubakr.
      </p>
    </footer>
  );
};

export default Footer;
