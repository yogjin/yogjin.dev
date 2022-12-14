import { getAllPostIds, getPostData } from '../../lib/posts';
import { getStaticPropsParams, PostMetaData } from '../../interfaces/post';
import { FC } from 'react';
import Date from '../../components/date';
import TableOfContents from '../../components/TableOfContents';
import Comment from '../../components/Comment';
import { useIsMobile } from '../../hooks/useIsMobile';

interface PostProps extends PostMetaData {}

const Post: FC<PostProps> = ({
  postId,
  contentHtml,
  title,
  category,
  date,
}) => {
  const isMobile = useIsMobile();

  return (
    <>
      <article className={`flex flex-col mt-10 prose prose-a:text-blue-600`}>
        <h1>{title}</h1>
        <div className={`mb-4 -mt-4`}>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml! }} />
      </article>
      {isMobile && (
        <div>
          <TableOfContents />
        </div>
      )}
      <div className={`xl:max-w-[90%]`}>
        <Comment />
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
  const {
    postId,
    contentHtml,
    title,
    category,
    date,
    thumbnail,
  }: PostMetaData = await getPostData(params.postId);
  return {
    props: { postId, contentHtml, title, category, date, thumbnail },
  };
}

export default Post;
