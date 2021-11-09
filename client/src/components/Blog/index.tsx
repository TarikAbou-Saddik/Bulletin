import { useEffect, useState } from 'react';
import { FaBookReader, FaCalendarAlt, FaBolt } from 'react-icons/fa';
import Logo from '../Logo';
import { Flex } from '../../styles/shared/Flex';
import {
  BlogDescription,
  BlogInfo,
  BlogInfoContainer,
  BlogPost,
  BlogTitle,
} from './styles';
import { data } from '../../data';
import { IBlogApiResponse, IBlogPost } from '../../types/BlogApiResponse';

const Blog = () => {
  const [blogData, setBlogData] = useState<IBlogApiResponse | undefined>(
    undefined,
  );

  useEffect(() => {
    const url = `/api/hackernews`;
    const fetchBlogData = async () => {
      try {
        const response = await fetch(url);
        const data: IBlogApiResponse = await response.json();
        setBlogData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogData();
  }, [blogData]);

  return (
    <>
      <Flex>
        <Logo logo={data.logo.iconSrc} color={data.logo.color} icon>
          {data.logo.title}
        </Logo>
        <BlogDescription>{data.description}</BlogDescription>
      </Flex>
      {blogData &&
        blogData.posts.map((post: IBlogPost, index) => (
          <BlogPost key={index}>
            <BlogTitle href={post.link}>{post.title}.</BlogTitle>
            <BlogInfoContainer>
              <BlogInfo>
                <FaBookReader />
                {post.author}
              </BlogInfo>
              <BlogInfo>
                <FaCalendarAlt />
                {post.formattedPostedDate}
              </BlogInfo>
              <BlogInfo>
                <FaBolt />
                {post.points} points
              </BlogInfo>
            </BlogInfoContainer>
          </BlogPost>
        ))}
    </>
  );
};

export default Blog;
