import styled from 'styled-components';

const borderRadius = '10px';

export const TopBlogPostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TopBlogPostTitle = styled.a`
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 5px;
`;

export const TopBlogPostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.75);
  color: #f1f1f1;
  width: 100%;
  height: 65%;
  padding: 20px;

  &:hover {
    height: 100%;
  }
`;

export const TopBlogPostContainer = styled.section`
  position: relative;
  margin-top: 20px;
  height: 120px;
  width: 100%;
  border: 0.5px solid ${({ theme }) => theme.otherText};

  &,
  & ${TopBlogPostImage}, & ${TopBlogPostContent} {
    border-radius: ${borderRadius};
  }
`;
