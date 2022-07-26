import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(postId) {
  const filePath = path.join(postsDirectory, `${postId}.mdx`);
  const file = fs.readFileSync(filePath);

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(file);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    postId,
    contentHtml,
    ...matterResult.data, // title, date ...etc
  };
}
