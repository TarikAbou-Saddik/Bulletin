import styled from 'styled-components';

export const BlogPostInfoContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const BlogPostInfoDetail = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  margin-right: 10px;

  & > *:first-child {
    margin-right: 5px;
  }
`;
