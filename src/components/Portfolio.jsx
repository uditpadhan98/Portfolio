import React from "react";
import shopClue from "../assets/portfolio/shopclue.png";
import foodOps from "../assets/portfolio/foodops.png";
import weather from "../assets/portfolio/Weather.png";
import quiz from "../assets/portfolio/Quiz.png";
import expense from "../assets/portfolio/expenseTracker.png";
import flappyBird from "../assets/portfolio/FlappyBird.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: shopClue,
      tittle: "E-commerce",
      demo: "https://shopclue.onrender.com/",
      code: "https://github.com/uditpadhan98/ecommerce"
    },
    {
      id: 2,
      src: foodOps,
      tittle: "Food-Order",
      demo: "https://food-9agv.onrender.com/",
      code: "https://github.com/uditpadhan98/food-ordering"
    },
    {
      id: 3,
      src: weather,
      tittle: "Weather",
      demo: "https://uditpadhan98.github.io/weather/",
      code: "https://github.com/uditpadhan98/weather"
    },
    {
      id: 4,
      src: quiz,
      tittle: "Quiz",
      demo: "https://uditpadhan98.github.io/Quiz-app/",
      code: "https://github.com/uditpadhan98/Quiz-app"
    },
    {
      id: 5,
      src: expense,
      tittle: "Expense-Tracker",
      demo: "https://uditpadhan98.github.io/Expense-tracker/",
      code: "https://github.com/uditpadhan98/Expense-tracker"
    },
    {
      id: 6,
      src: flappyBird,
      tittle: "FlappyBird Game",
      demo: "https://uditpadhan98.github.io/Flappy-Bird-Game/",
      code: "https://github.com/uditpadhan98/Flappy-Bird-Game"
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white lg:h-700">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        {/* structure for card */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, demo ,tittle}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-lg flex items-center justify-center duration-200 hover:scale-105">
                {tittle}
              </div>
              <div className="flex items-center justify-center">
                <a href={demo} className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={code} className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;