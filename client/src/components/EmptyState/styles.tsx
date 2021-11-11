import styled from 'styled-components';

export const EmptyStateContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  text-align: center;
`;

export const EmptyStateImage = styled.img`
  margin-bottom: 20px;
  width: 100%;

  @media only screen and (min-width: ${({ theme }) => theme.mobileSize}) {
    height: 70%;
  } ;
`;
