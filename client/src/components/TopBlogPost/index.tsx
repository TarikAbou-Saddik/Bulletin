import React, { useEffect, useRef } from 'react';
import { IBlogPost } from '../../types/BlogApiResponse';
import BlogPostInfo from '../BlogPostInfo';
import {
  TopBlogPostContainer,
  TopBlogPostContent,
  TopBlogPostImage,
  TopBlogPostTitle,
} from './styles';

type TopBlogPostProps = {
  post: IBlogPost;
  screenshotUrl: string;
};

const TopBlogPost = ({ post, screenshotUrl }: TopBlogPostProps) => {
  const imageRef = useRef<HTMLImageElement>();

  useEffect(() => {
    const node = imageRef.current as HTMLImageElement;
    node.src = screenshotUrl;
  }, [screenshotUrl]);

  return (
    <TopBlogPostContainer>
      <TopBlogPostImage
        ref={imageRef as React.MutableRefObject<HTMLImageElement>}
      />
      <TopBlogPostContent>
        <TopBlogPostTitle href={post.link}>{post.title}</TopBlogPostTitle>
        <BlogPostInfo {...post} accolades={post.points} />
      </TopBlogPostContent>
    </TopBlogPostContainer>
  );
};

export default TopBlogPost;
