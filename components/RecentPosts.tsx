import Link from 'next/link';

const RecentPosts = () => {
  return (
    <section>
      <h1 className={`text-4xl font-semibold mt-8 mb-4`}>최근 게시물</h1>
      <div className={'flex flex-col'}>
        <Link href="/">
          <a className={`mt-6`}>
            <div className={`text-2xl font-medium`}>
              나만의 블로그를 만들어보자
            </div>
            <div className={`text-xl my-1`}>
              Next.js + TypeScript + tailwindcss를 이용한 블로그 개발기
            </div>
          </a>
        </Link>
        <Link href="/">
          <a className={`mt-6`}>
            <div className={`text-2xl font-medium`}>Git-flow란?</div>
            <div className={`text-xl my-1`}>Git의 branch 전략을 알아보자</div>
          </a>
        </Link>
      </div>
    </section>
  );
};
export default RecentPosts;
