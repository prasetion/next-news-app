import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles}></ArticleList>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// old code dont delete
// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://my-json-server.typicode.com/prasetion/next-news-app/articles"
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
