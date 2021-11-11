import { FaBolt, FaBookReader, FaCalendarAlt } from 'react-icons/fa';
import { BlogPostInfoContainer, BlogPostInfoDetail } from './styles';

type BlogPostDetails = {
  author: string;
  formattedPostedDate: string;
  accolades?: string | Number;
};

const BlogPostInfo = ({
  author,
  formattedPostedDate,
  accolades,
}: BlogPostDetails) => {
  return (
    <BlogPostInfoContainer>
      <BlogPostInfoDetail>
        <FaBookReader />
        {author}
      </BlogPostInfoDetail>
      <BlogPostInfoDetail>
        <FaCalendarAlt />
        {formattedPostedDate}
      </BlogPostInfoDetail>
      {accolades && (
        <BlogPostInfoDetail>
          <FaBolt />
          {accolades} points
        </BlogPostInfoDetail>
      )}
    </BlogPostInfoContainer>
  );
};

export default BlogPostInfo;
