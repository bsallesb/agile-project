import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  margin-block: 24px;
  display: flex;
  padding: 24px;
  max-width: 1250px;
  gap: 18px;

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

  @media (max-width: 768px) {
    display: none;
  }
`;
