import { useEffect, useState } from 'react';
import { BlogDescription } from './styles';
import { Flex } from '../../styles/shared/Flex';
import {
  IBlogApiResponse,
  IBlogLogo,
  IBlogPost,
} from '../../types/BlogApiResponse';
import Logo from '../Logo';
import Spinner from '../../styles/shared/Spinner';
import TopBlogPost from '../TopBlogPost';

type ParsedBlogPost = {
  postDetails: IBlogPost;
  screenshotUrl: string;
};

const Blog = () => {
  const [blogLogo, setBlogLogo] = useState<IBlogLogo>();
  const [blogDescription, setBlogDescription] = useState<string>('');
  const [blogPosts, setBlogPosts] = useState<ParsedBlogPost[]>([]);

  useEffect(() => {
    const url = `/api/hackernews`;

    const fetchScreenshot = async (link: string): Promise<string> => {
      const response = await fetch(`/screenshot?url=${link}`);
      const image = await response.blob();
      return URL.createObjectURL(image);
    };

    const fetchBlogData = async (): Promise<IBlogApiResponse> => {
      const response = await fetch(url);
      return (await response.json()) as IBlogApiResponse;
    };

    const fetchData = async () => {
      try {
        const blogApiResponse = await fetchBlogData();
        const { posts } = blogApiResponse;
        const screenShotUrls = await Promise.all(
          posts.map(post => fetchScreenshot(post.link)),
        );
        let blogPosts = [];
        for (let i = 0; i < posts.length && i < screenShotUrls.length; i++) {
          blogPosts.push({
            postDetails: posts[i],
            screenshotUrl: screenShotUrls[i],
          });
        }
        setBlogPosts(blogPosts);
        setBlogLogo(blogApiResponse.logo);
        setBlogDescription(blogApiResponse.description);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [blogDescription]);

  const renderLogo = () => {
    if (blogLogo) {
      return (
        <Logo logo={blogLogo.iconSrc} color={blogLogo.color} icon>
          {blogLogo.title}
        </Logo>
      );
    }
  };

  const renderPosts = blogPosts
    .slice(1)
    .map((post: ParsedBlogPost, index) => (
      <TopBlogPost
        key={index}
        post={post.postDetails}
        screenshotUrl={post.screenshotUrl}
      />
    ));

  if (blogPosts.length === 0) {
    return <Spinner />;
  }
  return (
    <>
      <Flex>
        {renderLogo()}
        <BlogDescription>{blogDescription}</BlogDescription>
      </Flex>
      {renderPosts}
    </>
  );
};

export default Blog;
