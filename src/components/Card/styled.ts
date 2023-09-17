import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dfe1e5;
  width: 100%;
  padding: 18px;
`;

export const Image = styled.div`
  width: 100%;
  height: 300px;
  max-height: 300px;
  background-position: center center;
  background-size: cover;
  margin-bottom: 8px;

  @media (max-width: 1280px) {
    max-height: 260px;
  }

  @media (max-width: 1024px) {
    max-height: 200px;
  }
`;

export const Link = styled.span`
  font-size: 12px;
  margin-bottom: 8px !important;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px !important;
`;
