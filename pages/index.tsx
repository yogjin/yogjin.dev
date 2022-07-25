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
        <span
          className={`absolute top-32 text-4xl font-semibold text-white mx-6`}
        >
          Youngjin Park
        </span>
        <span className={`absolute top-44 text-xl font-normal text-white mx-6`}>
          Frontend Developer who likes playing guitar
        </span>
      </div>
    </div>
  );
};

export default Home;
