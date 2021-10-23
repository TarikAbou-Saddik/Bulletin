import styled from 'styled-components';

interface ButtonProps {
  readonly bg?: string;
  readonly color?: string;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 25px;
  background-color: ${({ bg }) => bg || '#3D3C3C'};
  color: ${({ color }) => color || '#FFF'};
  height: 40px;
  width: 200px;
  /* TODO: Change this to be customizable */
  border: 1px solid #c4c4c4;
`;
