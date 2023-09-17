import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 44px;
  margin-inline: 14px;
  padding-bottom: 24px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Link = styled.span`
  font-size: 12px;
  margin-bottom: 8px !important;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: normal;
  color: #1a0dab;
  margin-bottom: 8px !important;
`;

export const LoaderContent = styled(ContentLoader)`
  width: 721px;

  @media (max-width: 1024px) {
    max-width: 500px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
