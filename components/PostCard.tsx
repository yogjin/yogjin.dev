import { InferGetStaticPropsType } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FC } from 'react';
import { PostMetaData } from '../interfaces/post';
import Date from './date';

interface Props {
  postData: PostMetaData;
}

const PostCard = ({ postData }: Props) => {
  const imageSrc = postData.thumbnail;
  return (
    <section
      className={`border border-slate-300 rounded hover:shadow-xl ease-out duration-300`}
    >
      <Link href={`/posts/${postData.postId}`} key={postData.postId}>
        <a className={`mt-6`}>
          <Image
            className={`hover:scale-110 ease-out duration-300`}
            src={postData.thumbnail}
            alt="thumbnail"
            width={100}
            height={60}
            layout="responsive"
          />
          <div className={`p-2`}>
            <div className={`text-xl font-medium`}>{postData.title}</div>
            <Date dateString={postData.date} />
          </div>
        </a>
      </Link>
    </section>
  );
};

export default PostCard;
