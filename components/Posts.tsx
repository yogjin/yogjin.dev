import React from 'react';
import { PostMetaData } from '../interfaces/post';
import PostCard from './PostCard';

interface Props {
  postsData: PostMetaData[];
  selectedCategory: string;
}

const Posts = ({ postsData, selectedCategory }: Props) => {
  return (
    <div className={'grid grid-cols-2 gap-4 pt-2'}>
      {postsData.map((postData) => {
        return (
          (selectedCategory === 'All' ||
            selectedCategory === postData.category) && (
            <PostCard postData={postData} />
          )
        );
      })}
    </div>
  );
};

export default Posts;
