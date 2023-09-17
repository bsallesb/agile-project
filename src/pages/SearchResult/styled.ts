import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  overflow: auto;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
`;

export const Container = styled.div`
  display: flex;
  width: 1250px;
  gap: 18px;
  padding-top: 24px;

  @media (max-width: 1280px) {
    max-width: 1000px;
  }

  @media (max-width: 1024px) {
    max-width: 800px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
  }

  @media (max-width: 480px) {
    max-width: 450;
  }
`;

export const Image = styled.img`
  width: 272px;
`;

export const FirstSection = styled.div`
  min-width: 60%;
  max-width: 60%;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const SecondSection = styled.div`
  min-width: 40%;
  justify-content: end;
  position: relative;

  @media (max-width: 768px) {
    position: absolute;
  }
`;
