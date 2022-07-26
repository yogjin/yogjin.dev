import Link from 'next/link';
import { FC } from 'react';
import { PostMetaData } from '../interfaces/post';

interface RecentPostsProps {
  postDatas: PostMetaData[];
}
const RecentPosts: FC<RecentPostsProps> = ({ postDatas }) => {
  return (
    <section>
      <h1 className={`text-4xl font-semibold mt-8 mb-4`}>최근 게시물</h1>
      <div className={'flex flex-col'}>
        {postDatas.map((postData) => (
          <Link href={`/posts/${postData.postId}`} key={postData.postId}>
            <a className={`mt-6`}>
              <div className={`text-2xl font-medium`}>{postData.title}</div>
              <div className={`text-xl my-1`}>{postData.date}</div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
