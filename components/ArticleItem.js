import articleStyle from "../styles/Article.module.css";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <div className={articleStyle.card}>
      <Link href="/article/[id]" as={`/article/${article.id}`}>
        <a>
          <h3>{article.title} &rarr;</h3>
          <p>{article.body}</p>
        </a>
      </Link>
    </div>
  );
};

export default ArticleItem;
