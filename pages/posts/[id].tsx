import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticPaths } from "next";
import { useAppSelector } from "../../hooks/redux";
import { wrapper } from "../../store/store";
import Posts from "../../slices/posts";

type PostProps = {
  postId: number;
};

const Post = (props: PostProps) => {
  const post = useAppSelector((state) => state.post);

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = wrapper.getServerSideProps((store) => () => {
//   store.dispatch(Posts.getPost({ params: { id: 1 } }));
//   return {
//     props: {},
//   };
// });

export default Post;
