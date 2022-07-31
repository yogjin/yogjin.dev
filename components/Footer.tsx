import Image from 'next/image';
import githubImage from '../public/icon-github.png';
const Footer = () => {
  return (
    <footer className={`flex flex-col items-center border-t-2 mt-20 mb-8`}>
      <div className={`w-8 mt-4`}>
        <a href="https://github.com/yogjin">
          <Image src={githubImage} alt="github"></Image>
        </a>
      </div>
      <p className={`pt-2 pb-2`}>Copyright © 2022 YeongJinPark</p>
      <a
        href="https://github.com/yogjin/yogjin.dev"
        className={`hover:underline text-blue-600`}
      >
        yogjin.dev
      </a>
    </footer>
  );
};

export default Footer;
