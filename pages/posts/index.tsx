import type { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  function handleClickCategory(clicked: string) {
    console.log(clicked);
    setSelectedCategory(clicked);
  }
  return (
    <>
      <CategoryNav onClickCategory={handleClickCategory} />
      <div className={'flex flex-col'}>
        {postsData.map(
          (postData) =>
            (selectedCategory === 'All' ||
              selectedCategory === postData.category) && (
              <Link href={`/posts/${postData.postId}`} key={postData.postId}>
                <a className={`mt-6`}>
                  <div className={`text-2xl font-medium`}>{postData.title}</div>
                  <Date dateString={postData.date} />
                </a>
              </Link>
            )
        )}
      </div>
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
