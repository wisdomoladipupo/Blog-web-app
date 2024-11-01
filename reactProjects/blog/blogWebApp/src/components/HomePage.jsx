import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const HomePage = () => {
  const Articles = [
    {
      id: uuidv4(),
      Author: "wisdom oladipupo",
      Title: ` Adapting to the AI move & potential jobs displacement , AI in
                Humans Out.`,
      snippet: ` Less Input, Improved Work Productivity For Tech Companies `,
    },
  ];

  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold">Articles</h1>
      <main>
        <div>
          {
            Articles.map((article) => (
<div key={article.id}>
<Link to={`articles/${article.id}`}>
<h2>{article.Title}</h2>
</Link>
</div>
            ))
          }
          <div>
            <h3></h3>
          </div>

          <Link to="/Articles">
            <div className="m-4">
              <h2 className="text-lg my-6">
                Adapting to the AI move & potential jobs displacement , AI in
                Humans Out.
              </h2>
              <div className="flex gap-2">
                <p className="rounded-3xl bg-slate-300 p-2 px-4">Tech</p>
                <p className="rounded-3xl bg-slate-300 p-2 px-4">Tech Jobs</p>
              </div>
            </div>
          </Link>

          <hr />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
