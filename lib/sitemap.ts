import { PostMetaData } from '../interfaces/post';
import fs from 'fs';
import prettier from 'prettier';

const BLOG_DOMAIN = 'https://yogjin-dev.vercel.app';
const TODAY = new Date().toISOString();

const formatted = (sitemap: string) =>
  prettier.format(sitemap, { parser: 'html' });

/**
 * 모든 post의 정보를 담고있는 sitemap.xml을 동적으로 생성
 * @param allPosts
 */
export function generateSitemap(allPosts: PostMetaData[]) {
  // 각 post의 sitemap
  const sitemapURLs = allPosts
    .map(
      (post) =>
        `<url>
          <loc>${BLOG_DOMAIN}/posts/${post.postId}</loc>
          <lastmod>${post.date}</lastmod>
        </url>
        `
    )
    .join('');

  const sitemap = `
    <xml version="1.0" encoding="UTF-8">
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${BLOG_DOMAIN}</loc>
          <lastmod>${TODAY}</lastmod>
        </url>
        ${sitemapURLs}
      </urlset>
    </xml>`;

  const formattedSitemap = formatted(sitemap);

  fs.writeFileSync('public/sitemap.xml', formattedSitemap, 'utf-8');
}
