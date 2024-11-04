import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import myProfileImage from "../images/my profile image.jpg";
import Nav from "./Nav";

const HomePage = () => {
  const Articles = [
    {
      id: uuidv4(),
      Author: "wisdom oladipupo",
      Title: ` Adapting to the AI move & potential jobs displacement , AI in
                Humans Out.`,
      image: myProfileImage,
      snippet: ` Less Input, Improved Work Productivity For Tech Companies `,
    },
  ];

  return (
    <div className="m-4">
      <Nav />
      <h1 className="text-3xl font-bold m-5">Articles</h1>
      <hr  className="my-2"/>
      <main>
        <div>
          {Articles.map((article) => (
            <div key={article.id}>
              <div>
                <span className="flex gap-3">
                  <img
                    className="w-6 rounded-2xl"
                    src={myProfileImage}
                    alt=""
                  />
                  <p>{article.Author}</p>
                </span>

                <p>{article.snippet}</p>
              </div>
              <Link to={`Articles/${article.id}`}>
                <h2 className="text-lg my-6"> {article.Title}</h2>
              </Link>
              <div className="flex gap-2">
                <p className="rounded-3xl bg-slate-300 p-2 px-4">Tech</p>
                <p className="rounded-3xl bg-slate-300 p-2 px-4">Tech Jobs</p>
              </div>
            </div>
          ))}
          <hr className="my-4" />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
