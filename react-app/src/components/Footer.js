import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_div">
      <ul className="footer_list">
        <div className="footer_info">
          <p>Greg Gomes</p>

          <a href="https://github.com/greg-nice">GitHub</a> / <a href="https://www.linkedin.com/in/greg-gomes-a5257324/">
            LinkedIn
          </a>
        </div>
        <div className="footer_info">
          <p>Jake Payne</p>

          <a href="https://github.com/Payneless">GitHub</a> / <a href="https://www.linkedin.com/in/jake-payne-aba009155/">
            LinkedIn
          </a>
        </div>
        <div className="footer_info">
          <p>Joseph Nackman</p>

          <a href="https://github.com/yosefalan/">GitHub</a> / <a href="https://www.linkedin.com/in/joseph-nackman/">LinkedIn</a>
        </div>
        <div className="footer_info">
          <p>Tony Hauck</p>

          <a href="https://github.com/hauck29">GitHub</a> / <a href="https://www.linkedin.com/in/tony-hauck-92b6a21a4/">
            LinkedIn
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
