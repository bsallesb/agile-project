import styled from 'styled-components';

export const ButtonStyled = styled.button`
  padding: 12px 24px;
  width: 100%;
  border: 1px solid #f8f9fa;
  background-color: #f8f9fa;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};

  &:hover {
    border: ${({ disabled }) =>
      disabled ? '1px solid #f8f9fa' : '1px solid #f0f1f4'};
  }
`;
