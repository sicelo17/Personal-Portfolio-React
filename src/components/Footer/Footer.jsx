import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%", height: "13em" }} />
      <div className="f-content">
        <span>
          <a href="mailto:sicelositsha@yahoo.com">sicelositsha@yahoo.com</a>
        </span>
        <div className="f-icons">
          <a href="https://www.instagram.com/i.am.sicelo/">
            <Insta color="white" size={"1.5rem"} />
          </a>
          <a href="https://www.linkedin.com/in/sicelo-sitsha-41b287204/">
            <Facebook color="white" size={"1.5rem"} />
          </a>
          <a href="https://github.com/sicelo17/">
            <Gitub color="white" size={"1.5rem"} />
          </a>
          <a href="https://twitter.com/sitsha_sicelo">
            <Twitter color="white" size={"1.5rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
