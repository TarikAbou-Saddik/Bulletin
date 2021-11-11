import { IBlogPost } from '../../types/BlogApiResponse';
import BlogPostInfo from '../BlogPostInfo';
import { BlogPostContainer, BlogPostTitle } from './styles';

const BlogPost = ({
  author,
  link,
  title,
  formattedPostedDate,
  points,
}: IBlogPost) => {
  return (
    <BlogPostContainer>
      <BlogPostTitle href={link}>{title}.</BlogPostTitle>
      <BlogPostInfo
        author={author}
        formattedPostedDate={formattedPostedDate}
        accolades={points}
      />
    </BlogPostContainer>
  );
};

export default BlogPost;
