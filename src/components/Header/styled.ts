import styled from 'styled-components';

interface ISectionProps {
  $gap: number;
  $searchable?: boolean;
}

interface IUserSectionProps {
  $searchable: boolean;
}

export const Wrapper = styled.header`
  display: flex;
  padding-block: 12px;
  padding-inline: 24px;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #dfe1e5;

  @media (max-width: 480px) {
    justify-content: space-between;
  }

  @media (max-width: 410px) {
    justify-content: center;
  }
`;

export const Section = styled.div<ISectionProps>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => $gap}px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    align-items: start;
  }

  @media (max-width: 480px) {
    flex-direction: ${({ $searchable }) => ($searchable ? 'row' : 'column')};
    gap: ${({ $searchable }) => ($searchable ? 24 : 8)}px;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 410px) {
    flex-direction: column;
    gap: 8px;
    justify-content: center;
  }
`;

export const UserSection = styled.div<IUserSectionProps>`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 480px) {
    display: ${({ $searchable }) => ($searchable ? 'none' : 'flex')};

    svg {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  font-size: 13px;
  font-weight: bold;
`;

export const Description = styled.h2`
  font-size: 13px;
  font-weight: normal;
`;

export const Image = styled.img`
  width: 100px;
`;

export const SearchContent = styled.div`
  width: 250px;
`;
