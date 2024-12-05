import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import FaithImage from "../images/faith-image.jpeg";
import TechvsHuman from "../images/human vs Tech image.jpeg";
import KennethEHagin from "../images/KennethEHagin.jpeg"
import IRONHACK from "../images/ironhack.jpeg"
import Nav from "./Nav";

const HomePage = () => {
  const Articles = [
    {
      id: uuidv4(),
      Author: "IRONHACK",
      Title: `is The new AI wave displacing Humans From The workplace?
       and how to Adapt to an everchanging Tech Enviroment.`,
      Banner: TechvsHuman,
      image: IRONHACK,
      snippet: ` Less Input, Improved Work Productivity For Tech Companies `,
      Tag_1: `Tech`,
      Tag_2: `Tech jobs`,
    },
    {
      id: uuidv4(),
      Author: "Kenneth E.Hagin",
      Title: ` Building Faith And Leading A New Life as A believer.`,
      image: KennethEHagin,
      Banner: FaithImage,
      snippet: ` God has not blessed one person with more faith than He has blessed someone else. `,
      Tag_1: `Christianity`,
      Tag_2: `Faith`,
    },
  ];

  return (
    <div className="ml-6 mb-4">
      <Nav />
      <h1 className="text-3xl font-bold m-5">Articles</h1>
      <hr className="my-2" />
      <main>
        <div>
          {Articles.map((article) => (
            <div key={article.id}>
              <div>
                <div className="flex items-center  justify-between">
                  <Link to={`articles/${article.id}`}>
                    <h2 className="text-lg font-bold my-6">
                      {" "}
                     {article.Title}
                    </h2>
                    <img className="rounded-lg" src={article.Banner} alt="article banner" />
                  </Link>
                </div>
              
                <p>{article.snippet}</p>
                <div className="flex mt-4 gap-2 mb-6 items-center">
                  <p className="rounded-3xl bg-slate-300 p-2 px-4">
                    {article.Tag_1}
                  </p>
                  <p className="rounded-3xl bg-slate-300 p-2 px-4">
                    {article.Tag_2}
                  </p>
                  <span className="flex order-1 gap-3 mr-3">
                    <img
                      className="w-6 h-6 rounded-2xl"
                      src={article.image}
                      alt="Authors image"
                    />
                    <p className="font-bold">{article.Author}</p>
                  </span>
                </div>
              </div>

              <hr />
            </div>
          ))}
          <hr className="my-4" />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
