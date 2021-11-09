import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: relative;
  padding: 30px 0;

  & svg {
    cursor: pointer;
    font-size: 25px;
    margin-right: 5px;
  }

  animation: slideDown 0.7s ease-in;

  @media only screen and (min-width: ${({ theme }) => theme.mobileSize}) {
    & svg {
      font-size: 40px;
      margin-right: 20px;
    }
  } ;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
