import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

type headingElements = {
  [key: string]: IntersectionObserverEntry;
};
let options = {
  root: null, // 브라우저 뷰포트
  rootMargin: '0px 0px -90% 0px',
  threshold: 1.0,
};

function useIntersectionObserver(
  setSelected: Dispatch<SetStateAction<string | undefined>>
) {
  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]) => {
      headings = headings.filter((heading) => heading.isIntersecting);
      if (headings.length) {
        setSelected(headings[0].target.id);
      }
    };
    let observer = new IntersectionObserver(callback, options);
    let headings = document.querySelectorAll('h2, h3');
    headings.forEach((heading) => {
      observer.observe(heading);
    });
    return () => {
      observer.disconnect();
    };
  });
}

export default useIntersectionObserver;
