import type { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import CategoryNav from '../../components/CategoryNav';
import Date from '../../components/date';
import {
  getAllPostIds,
  getAllPostsData,
  getPostsCategory,
} from '../../lib/posts';

const Posts = ({
  postsData,
  postsCategory,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div
        className={`text-blue-500 text-xl font-medium mt-10 pb-1 border-b-2`}
      >
        <CategoryNav />
      </div>
      {/* <div className={'flex flex-col'}>
        {postsData.map((postData) => (
          <Link href={`/posts/${postData.postId}`} key={postData.postId}>
            <a className={`mt-6`}>
              <div className={`text-2xl font-medium`}>{postData.title}</div>
              <Date dateString={postData.date} />
            </a>
          </Link>
        ))}
      </div> */}
    </>
  );
};

export function getStaticProps() {
  const postsData = getAllPostsData();
  const postsCategory = getPostsCategory();
  return {
    props: {
      postsData,
      postsCategory,
    },
  };
}
export default Posts;
