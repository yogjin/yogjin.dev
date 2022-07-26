import { GrayMatterFile } from 'gray-matter';

export interface PostMetaData {
  postId: string;
  contentHtml: string;
  title: string;
  date: string;
}

export interface getStaticPropsParams {
  params: {
    postId: string;
  };
}
