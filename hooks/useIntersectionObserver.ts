import { Dispatch, SetStateAction, useEffect } from 'react';
import useScrollDirection from './useScrollDirection';

type headingElements = {
  [key: string]: IntersectionObserverEntry;
};
let options = {
  root: null, // 브라우저 뷰포트
  rootMargin: '-20% 0px 0px 0px',
  threshold: 1.0,
};

function useIntersectionObserver(
  setSelected: Dispatch<SetStateAction<string | undefined>>
) {
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const headingsAll = Array.from(document.querySelectorAll('h2, h3'));

    const callback: IntersectionObserverCallback = (
      headings: IntersectionObserverEntry[]
    ) => {
      if (headings.length <= 0 || headings.length > 2) {
        return;
      }
      if (scrollDirection === 'down' && !headings[0].isIntersecting) {
        setSelected(headings[0].target.id);
      } else if (scrollDirection === 'up' && headings[0].isIntersecting) {
        let targetIndex = headingsAll.indexOf(headings[0].target) - 1;
        targetIndex < 0
          ? setSelected('')
          : setSelected(headingsAll[targetIndex].id);
      }
    };
    let observer = new IntersectionObserver(callback, options);

    headingsAll.forEach((heading) => {
      observer.observe(heading);
    });
    return () => {
      observer.disconnect();
    };
  });
}

export default useIntersectionObserver;
