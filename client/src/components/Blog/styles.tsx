import styled from 'styled-components';

export const BlogPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid ${({ theme }) => theme.text};
  border-radius: 15px;
  margin-top: 15px;
  padding: 15px 10px;
  height: 115px;
`;

export const BlogTitle = styled.a`
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
`;

export const BlogInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BlogInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.62rem;
  margin-right: 10px;

  & > *:first-child {
    margin-right: 5px;
  }
`;

export const BlogDescription = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.otherText};
`;
