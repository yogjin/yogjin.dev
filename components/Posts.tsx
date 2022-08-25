import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FC } from 'react';
import { PostMetaData } from '../interfaces/post';
import Date from './date';
import cardImage from '/public/thumbnails/데이터타입.png';

interface Props {
  postsData: PostMetaData[];
  selectedCategory: string;
}

const Posts = ({ postsData, selectedCategory }: Props) => {
  return (
    <div className={'grid grid-cols-2 gap-4 pt-2'}>
      {postsData.map(
        (postData) =>
          (selectedCategory === 'All' ||
            selectedCategory === postData.category) && (
            <section
              className={`border border-slate-300 rounded hover:shadow-xl ease-out duration-300`}
            >
              <Link href={`/posts/${postData.postId}`} key={postData.postId}>
                <a className={`mt-6`}>
                  <Image
                    className={`hover:scale-110 ease-out duration-300`}
                    src={cardImage}
                    alt="test"
                    width={100}
                    height={60}
                    layout="responsive"
                  ></Image>
                  <div className={`p-2`}>
                    <div className={`text-xl font-medium`}>
                      {postData.title}
                    </div>
                    <Date dateString={postData.date} />
                  </div>
                </a>
              </Link>
            </section>
          )
      )}
    </div>
  );
};

export default Posts;
