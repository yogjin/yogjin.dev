import type { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { getAllPostIds, getAllPostsData } from '../lib/posts';

const Posts = ({
  postsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div className={`text-blue-500 text-3xl`}>Posts</div>
      {postsData.map((postData) => (
        <Link href={`/posts/${postData.postId}`} key={postData.postId}>
          <a className={`mt-6`}>
            <div className={`text-2xl font-medium`}>{postData.title}</div>
            <div className={`text-xl my-1`}>{postData.date}</div>
          </a>
        </Link>
      ))}
    </>
  );
};

export function getStaticProps() {
  const postsData = getAllPostsData();

  return {
    props: {
      postsData,
    },
  };
}
export default Posts;
