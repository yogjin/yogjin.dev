import { GrayMatterFile } from 'gray-matter';

export interface PostMetaData {
  postId: string;
  contentHtml?: string;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
}

export interface getStaticPropsParams {
  params: {
    postId: string;
  };
}
