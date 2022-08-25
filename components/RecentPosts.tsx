import Link from 'next/link';
import { FC } from 'react';
import { PostMetaData } from '../interfaces/post';
import Date from './date';

interface RecentPostsProps {
  postDatas: PostMetaData[];
}
const RecentPosts: FC<RecentPostsProps> = ({ postDatas }) => {
  return (
    <section>
      <h1 className={`text-4xl font-semibold mt-12 mb-4 `}>최근 게시물</h1>
      <div className={'flex flex-col'}>
        {postDatas.map((postData) => (
          <Link href={`/posts/${postData.postId}`} key={postData.postId}>
            <a className={`mt-4`}>
              <div className={`text-xl font-medium`}>{postData.title}</div>
              <Date dateString={postData.date} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
