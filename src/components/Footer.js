import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";



function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/uditpadhan98">
        <GitHubIcon/>
        </a>
        <a href="https://twitter.com/youdit98">
        <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/udit-padhan-41481a222/">
        <LinkedInIcon />
        </a>
        <EmailIcon/>
      </div>
      <p> &copy; 2023 you_dit.com</p>
    </div>
  );
}

export default Footer;