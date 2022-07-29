import { getAllPostIds, getPostData } from '../../lib/posts';
import { getStaticPropsParams, PostMetaData } from '../../interfaces/post';
import { FC } from 'react';
import Date from '../../components/date';
import TableOfContents from '../../components/TableOfContents';

interface PostProps extends PostMetaData {}

const Post: FC<PostProps> = ({ postId, contentHtml, title, date }) => {
  return (
    <>
      <article className={`flex flex-col mt-10 prose prose-a:text-blue-600`}>
        <h1>{title}</h1>
        <div className={`mb-4 -mt-4`}>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml! }} />
      </article>
      <div>
        <TableOfContents />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: getStaticPropsParams) {
  const { postId, contentHtml, title, date }: PostMetaData = await getPostData(
    params.postId
  );
  return {
    props: { postId, contentHtml, title, date },
  };
}

export default Post;
