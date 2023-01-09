import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Udit Padhan</h2>
        <div className="prompt">
          <p>A Web developer ...learning and creating.</p>
          <a href="https://www.linkedin.com/in/udit-padhan-41481a222/">
          <LinkedInIcon />
          </a>
          <a href="">
          <EmailIcon />
          </a>
          <a href="https://github.com/uditpadhan98">
          <GithubIcon />
          </a>
          <a href="https://twitter.com/youdit98">
          <TwitterIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, BootStrap, Java Script.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, 
              MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;