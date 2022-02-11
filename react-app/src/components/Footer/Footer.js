import React from "react";
// import githubLogo from "../Footer/githubLogo.png";
// import linkedInLogo from "../Footer/linkedInLogo.png";
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer_div">


      <div className="footer_info">
        <div className="footer_info_inset">
          <div className="glogo_div">
            <a className="g" href="https://github.com/greg-nice"
            target="_blank">
              <i className="fab fa-github ig" />
            </a>
          </div>
          <div className="llogo_div">
            <a className="l" href="https://www.linkedin.com/in/greg-gomes-a5257324"
            target="_blank">
              <i className="fab fa-linkedin-in il"/>
            </a>
          </div>
          <div className="name_inset">
            <p className="name">Greg Gomes</p>
          </div>
        </div>
      </div>

      <div className="footer_info">
        <div className="footer_info_inset">
          <div className="glogo_div">
            <a className="g" href="https://github.com/Payneless" target="_blank">
              <i className="fab fa-github ig" />
            </a>
          </div>
          <div className="llogo_div">
            <a className="l" href="https://www.linkedin.com/in/jake-payne-aba009155/"
            target="_blank">
              <i className="fab fa-linkedin-in il"/>
            </a>
          </div>
          <div className="name_inset">
            <p className="name">Jake Payne</p>
          </div>
        </div>
      </div>

      <div className="footer_info">
        <div className="footer_info_inset">
          <div className="glogo_div">
            <a className="g" href="https://github.com/yosefalan/"
            target="_blank">
              <i className="fab fa-github ig" />
            </a>
          </div>
          <div className="llogo_div">
            <a className="l" href="https://www.linkedin.com/in/joseph-nackman/"
            target="_blank">
              <i className="fab fa-linkedin-in il"/>
            </a>
          </div>
          <div className="name_inset">
            <p className="name">Joseph Nackman</p>
          </div>
        </div>
      </div>

      <div className="footer_info">
        <div className="footer_info_inset">
          <div className="glogo_div">
            <a className="g" href="https://github.com/hauck29"
            target="_blank">
              <i className="fab fa-github ig" />
            </a>
          </div>
          <div className="llogo_div">
            <a className="l" href="https://www.linkedin.com/in/tony-hauck-92b6a21a4/"
            target="_blank">
              <i className="fab fa-linkedin-in il"/>
            </a>
          </div>
          <div className="name_inset">
            <p className="name">Tony Hauck</p>
          </div>
        </div>
      </div>

    </div>
    </>



  );
};

export default Footer;
