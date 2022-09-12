import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import RecentPosts from '../components/RecentPosts';
import { getRecentPostsData } from '../lib/posts';
import styles from '../styles/Home.module.css';

const Home = ({
  postDatas,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
      </Head>
      <div>
        <div>
          <Image
            src="/home.jpeg"
            alt="home"
            width={'100%'}
            height={40}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-2xl`}
          />
          <div
            className={`flex flex-col text-center left-0 top-0 bg-black bg-opacity-90 rounded-2xl py-6 my-2`}
          >
            <span className={`text-3xl font-semibold text-white mx-6`}>
              yogjin's 개발 블로그
            </span>
            <span className={`font-normal text-blue-500 mx-6`}>
              Frontend Developer, likes playing guitar
            </span>
          </div>
        </div>
        <div>
          <RecentPosts postDatas={postDatas} />
        </div>
      </div>
    </>
  );
};
export function getStaticProps() {
  const postDatas = getRecentPostsData();

  return {
    props: {
      postDatas,
    },
  };
}
export default Home;
