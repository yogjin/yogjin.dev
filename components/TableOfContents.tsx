import { FC, useEffect, useState } from 'react';
import useHeadingsData, { HeadElement } from '../hooks/useHeadingsData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface HeadingsProps {
  headings: HeadElement[];
}
const Headings: FC<HeadingsProps> = ({ headings }) => {
  const [selected, setSelected] = useState<string>();
  const intersectionObserver = useIntersectionObserver(setSelected);

  return (
    <ul>
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={`text-[#ACACAC] hover:text-black transition-all duration-300 inline-block text-sm ${
              selected === heading.id && `text-black scale-105 -translate-x-0.5`
            }`}
            onClick={() => {
              setSelected(heading.id);
            }}
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li key={child.id}>
                  <a
                    href={`#${child.id}`}
                    className={`ml-4 text-[#ACACAC] hover:text-black transition-all duration-300 inline-block text-sm ${
                      selected === child.id &&
                      `text-black scale-105 -translate-x-0.5`
                    }`}
                    onClick={() => {
                      setSelected(child.id);
                    }}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

const TableOfContents = () => {
  const nestedHeadings: HeadElement[] = useHeadingsData();

  return (
    <nav
      className={`fixed top-44 right-44 border-l-2 pl-4 w-44`}
      aria-label="Table of contents"
    >
      <Headings headings={nestedHeadings} />
    </nav>
  );
};

export default TableOfContents;
