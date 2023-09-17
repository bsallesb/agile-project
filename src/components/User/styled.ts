import styled from 'styled-components';

interface IImageProps {
  $size: number;
}

export const Image = styled.div<IImageProps>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: ${({ $size }) => $size}px;
  background-size: cover;
  background-position: center;
`;
