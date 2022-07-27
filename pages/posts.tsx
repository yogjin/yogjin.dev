import type { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import Date from '../components/date';
import { getAllPostIds, getAllPostsData } from '../lib/posts';

const Posts = ({
  postsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div
        className={`text-blue-500 text-5xl font-medium mt-10 pb-6 border-b-4`}
      >
        Posts
      </div>
      <div className={'flex flex-col'}>
        {postsData.map((postData) => (
          <Link href={`/posts/${postData.postId}`} key={postData.postId}>
            <a className={`mt-6`}>
              <div className={`text-2xl font-medium`}>{postData.title}</div>
              <Date dateString={postData.date} />
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
