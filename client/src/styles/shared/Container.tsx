import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0 2.5rem;
  margin: 0 auto;
  height: 100vh;

  @media only screen and (min-width: ${({ theme }) => theme.mobileSize}) {
    padding: 0 4rem;
  } ;
`;

export default Container;
