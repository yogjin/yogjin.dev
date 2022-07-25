import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <div className={`relative`}>
        <Image
          src="/home.jpeg"
          alt="home"
          width={'100%'}
          height={40}
          layout={`responsive`}
          objectFit="cover"
          className={`rounded-3xl`}
        />
        <div
          className={`flex flex-col absolute left-2 top-2 bg-black bg-opacity-90 rounded-xl py-8 m-2`}
        >
          <span className={`text-4xl font-semibold text-white mx-6`}>
            Youngjin Park
          </span>
          <span className={`text-xl font-normal text-white mx-6`}>
            Frontend Developer who likes playing guitar
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
