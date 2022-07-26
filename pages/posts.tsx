import type { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { getAllPostIds, getAllPostsData } from '../lib/posts';

const Posts = ({
  postsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div className={`text-blue-500 text-6xl my-10 pb-6 border-b-4`}>
        Posts
      </div>
      <div className={'flex flex-col'}>
        {postsData.map((postData) => (
          <Link href={`/posts/${postData.postId}`} key={postData.postId}>
            <a className={`my-6`}>
              <div className={`text-3xl font-medium`}>{postData.title}</div>
              <div className={`text-xl my-2`}>{postData.date}</div>
            </a>
          </Link>
        ))}
      </div>
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
