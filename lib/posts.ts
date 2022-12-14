import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import rehypePrism from 'rehype-prism';
import rehypeSlug from 'rehype-slug';
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import html from 'rehype-stringify';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { PostMetaData } from '../interfaces/post';
import { GetStaticPathsResult } from 'next';
import { unified } from 'unified';
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
  const processedContent = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(html)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrism)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();
  const postMetadata = {
    postId,
    contentHtml,
    title: matterResult.data.title,
    category: matterResult.data.category,
    date: matterResult.data.date,
    thumbnail: matterResult.data.thumbnail,
  };
  return postMetadata;
}

// Use for posts page
export function getAllPostsData() {
  const postFiles = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((dirent) => !dirent.isDirectory())
    .map((file) => file.name);
  const postFrontMatters: PostMetaData[] = postFiles.map((postFile) => {
    const filePath = path.join(postsDirectory, postFile);
    const file = fs.readFileSync(filePath, 'utf-8');

    const matterResult = matter(file);
    const frontMatter = {
      postId: postFile.replace(/.mdx$/, ''),
      title: matterResult.data.title,
      category: matterResult.data.category,
      date: matterResult.data.date,
      thumbnail: matterResult.data.thumbnail,
    };
    return frontMatter;
  });

  const PostsData = postFrontMatters.sort(({ date: a }, { date: b }) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });
  return PostsData;
}

// Use for RecentPosts.tsx
// Show recent 5 posts
export function getRecentPostsData() {
  const postFiles = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((dirent) => !dirent.isDirectory())
    .map((file) => file.name);
  const postFrontMatters: PostMetaData[] = postFiles.map((postFile) => {
    const filePath = path.join(postsDirectory, postFile);
    const file = fs.readFileSync(filePath, 'utf-8');

    const matterResult = matter(file);
    const frontMatter = {
      postId: postFile.replace(/.mdx$/, ''),
      title: matterResult.data.title,
      category: matterResult.data.category,
      date: matterResult.data.date,
      thumbnail: matterResult.data.thumbnail,
    };
    return frontMatter;
  });

  const RecentPostsDataFive = postFrontMatters
    .sort(({ date: a }, { date: b }) => {
      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      } else {
        return 0;
      }
    })
    .slice(0, 5);
  return RecentPostsDataFive;
}

/**
 * post??? ????????????(??????)
 *
 * 'src/posts/' ??? ?????? ???????????????????????? ????????????.
 */
export function getPostsCategory() {
  const categories = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((directory) => directory.name);

  return categories;
}
