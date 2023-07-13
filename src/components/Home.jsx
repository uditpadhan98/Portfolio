import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
            I'm a Frontend Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci possimus quae asperiores exercitationem
            necessitatibus id eos in, itaque culpa repudiandae labore praesentium sint, assumenda recusandae, molestias
            officia saepe voluptate odit.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div style={{marginLeft:"2rem"}}>
          <img
            src={HeroImage}
            alt="my profile"
            className="profile-pic rounded-4xl mx-auto w-3/3 h-48 md:w-full"
            style={{borderRadius:"10px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;