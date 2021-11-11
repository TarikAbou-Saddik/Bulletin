import styled from 'styled-components';

export const BlogPostContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.otherText};
  padding: 15px 5px;
`;

export const BlogPostTitle = styled.a`
  color: ${({ theme }) => theme.text};
  margin-bottom: 15px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
`;

export const BlogPostImage = styled.img`
  width: 150px;
  height: 100px;
`;
