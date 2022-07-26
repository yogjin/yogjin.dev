import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { PostMetaData } from '../interfaces/post';
import { GetStaticPathsResult } from 'next';
const postsDirectory = path.join(process.cwd(), 'posts');

// Use for getStaticPaths in [postId].tsx
export function getAllPostIds(): GetStaticPathsResult['paths'] {
  const postFiles = fs.readdirSync(postsDirectory);
  // Remove .mdx
  const posts = postFiles.map((postFile) => {
    const postId = postFile.replace(/\.mdx/, '');
    return {
      params: {
        postId,
      },
    };
  });
  return posts;
}

export async function getPostData(postId: string) {
  const filePath = path.join(postsDirectory, `${postId}.mdx`);
  const file = fs.readFileSync(filePath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(file);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  const postMetadata = {
    postId,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
  };
  return postMetadata;
}
