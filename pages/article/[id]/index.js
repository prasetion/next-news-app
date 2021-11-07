import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../../../config";
import Meta from "../../../components/Meta";

const article = ({ article }) => {
  return (
    <>
      <Meta title={article.title}></Meta>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

// old code dont delete
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://my-json-server.typicode.com/prasetion/next-news-app/articles/${context.params.id}`
//   );

//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     `https://my-json-server.typicode.com/prasetion/next-news-app/articles`
//   );

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

export default article;
