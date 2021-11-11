import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const SpinnerContainer = styled.div`
  position: relative;
  top: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.otherText};

  & > svg {
    @keyframes rotateIcon {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    animation: rotateIcon 1.5s infinite;
  }

  & > * {
    margin-top: 20px;
  }
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      Grabbing some articles for you...
      <FaSpinner size={30} />
    </SpinnerContainer>
  );
};

export default Spinner;
