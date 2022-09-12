import Layout from "../../components/layout";
import { getAllPostIds } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticPaths } from "next";
import { useAppSelector } from "../../hooks/redux";
import { wrapper } from "../../store/store";
import Posts from "../../slices/posts";

const post = {
  title: "subtitle",
  date: null,
  contentHtml: "sample content"
}

const Post = () => {
  const post = useAppSelector(state => state.posts.post)
  return (
    <Layout>
        <Head>
        <title>{post?.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{post?.title}</h1>
        <div className={utilStyles.lightText}>
          {post?.date && <Date dateString={post.date} />}
        </div>
        {post?.contentHtml && <div dangerouslySetInnerHTML={{ __html: post?.contentHtml }} />}
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

export const getStaticProps = wrapper.getStaticProps(store => async ({ params }) => {
  if (params?.id) {
    const response = await fetch(`http://localhost:3000/api/getPost?id=${params.id}`);
    const data = await response.json();
    store.dispatch(Posts.fetchPost(data));
  }
  return {
    props: {},
  };
});

export default Post;
