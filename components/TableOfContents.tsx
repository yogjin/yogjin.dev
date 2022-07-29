import { FC } from 'react';
import useHeadingsData, { HeadElement } from '../hooks/useHeadingsData';

interface HeadingsProps {
  headings: HeadElement[];
}
const Headings: FC<HeadingsProps> = ({ headings }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id}>
        <a href={`#${heading.id}`}>{heading.title}</a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child) => (
              <li key={child.id}>
                <a href={`#${child.id}`} className={`ml-4`}>
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

const TableOfContents = () => {
  const nestedHeadings: HeadElement[] = useHeadingsData();

  return (
    <nav
      className={`fixed top-44 right-44 border-l-2 pl-2`}
      aria-label="Table of contents"
    >
      <Headings headings={nestedHeadings} />
    </nav>
  );
};

export default TableOfContents;
