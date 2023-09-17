import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dfe1e5;
  max-width: 500px;
  width: 34%;
  padding: 18px;
  position: fixed;

  @media (max-width: 768px) {
    background-color: #fff;
    z-index: 6;
    position: absolute;
    width: 60vw;
    left: 35%;
  }

  @media (max-width: 410px) {
    width: 75vw;
  }
`;

export const Backdrop = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    border: none;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
  }
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

export const LoaderContent = styled(ContentLoader)`
  height: 435px;

  @media (max-width: 1024px) {
    height: 300px;
  }
`;

export const FirstLine = styled.rect`
  display: block;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SecondLine = styled.rect`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;
