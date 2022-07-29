import { useEffect, useState } from 'react';

export interface HeadElement {
  id: string;
  title: string;
  items: any[];
}
const getNestedHeadings = (headingElements: HTMLElement[]): HeadElement[] => {
  const nestedHeadings: HeadElement[] = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
};

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState<HeadElement[]>([]);

  useEffect(() => {
    const headingElements: HTMLElement[] = Array.from(
      document.querySelectorAll('h2, h3')
    );

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return nestedHeadings;
};

export default useHeadingsData;
