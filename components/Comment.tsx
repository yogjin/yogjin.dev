import React, { useEffect, useRef } from 'react';

const Comment = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', 'yogjin/yogjin.dev');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('label', 'blog-comment');

    ref.current && ref.current.appendChild(script);
  }, []);

  return <div ref={ref}></div>;
};

export default Comment;
