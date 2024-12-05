import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticlesPage = () => {
  const { articleId } = useParams();
  const [ArticleComponent, setArticleComponent] = useState(null);
  useEffect(() => {
    import(`./articles/${articleId}.jsx`)
      .then((module) => {
        setArticleComponent(() => module.default);
      })
      .catch(() => {
        setArticleComponent(() => <p>Article not Found</p>);
      });
  }, [articleId]);
  return <div>
    {ArticleComponent && <articleComponent/>}
  </div>;
};

export default ArticlesPage;
