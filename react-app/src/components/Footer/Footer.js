import React from "react";
import githubLogo from "../Footer/githubLogo.png";
import linkedInLogo from "../Footer/linkedInLogo.png";
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div className="footer_div">
      <ul className="footer_list">
        <div className="footer_info">
          <p>Greg Gomes</p>
          <a href="https://github.com/greg-nice">
            <img className="gLogo" src={githubLogo} alt=""></img>
          </a>
          <a href="https://www.linkedin.com/in/greg-gomes-a5257324/">
          <img className="lLogo" src={linkedInLogo} alt=""></img>
          </a>
        </div>
        <div className="footer_info">
          <p>Jake Payne</p>

          <a href="https://github.com/Payneless"><img  className="gLogo" src={githubLogo} alt=""></img></a>
          <a href="https://www.linkedin.com/in/jake-payne-aba009155/">
          <img className="lLogo"  src={linkedInLogo} alt=""></img>
          </a>
        </div>
        <div className="footer_info">
          <p>Joseph Nackman</p>

          <a href="https://github.com/yosefalan/"><img  className="gLogo" src={githubLogo} alt=""></img></a>
          <a href="https://www.linkedin.com/in/joseph-nackman/">
          <img className="lLogo"  src={linkedInLogo} alt=""></img>
          </a>
        </div>
        <div className="footer_info">
          <p>Tony Hauck</p>

          <a href="https://github.com/hauck29"><img  className="gLogo" src={githubLogo} alt=""></img></a>
          <a href="https://www.linkedin.com/in/tony-hauck-92b6a21a4/">
          <img className="lLogo"  src={linkedInLogo} alt=""></img>
          </a>
        </div>
      </ul>
      <div className="copyright_div">
        {" "}
        No © 2021 Instagramme by Four Random Dudes, No Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
