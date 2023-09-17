import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
`;

export const SearchSection = styled.div`
  display: flex;
  min-width: 600px;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    min-width: 400px;
  }

  @media (max-width: 480px) {
    min-width: 300px;
  }
`;

export const Image = styled.img`
  max-width: 272px;

  @media (max-width: 768px) {
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 150px;
  }
`;
