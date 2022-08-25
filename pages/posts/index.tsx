import type { InferGetStaticPropsType, NextPage } from 'next';
import { useState } from 'react';
import CategoryNav from '../../components/CategoryNav';
import PostCards from '../../components/Posts';
import {
  getAllPostIds,
  getAllPostsData,
  getPostsCategory,
} from '../../lib/posts';

const Index = ({
  postsData,
  postsCategory,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  function handleClickCategory(clicked: string) {
    setSelectedCategory(clicked);
  }
  return (
    <>
      <CategoryNav
        selectedCategory={selectedCategory}
        onClickCategory={handleClickCategory}
      />
      <PostCards postsData={postsData} selectedCategory={selectedCategory} />
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
export default Index;
