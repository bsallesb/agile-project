import styled from 'styled-components';

export const SearchContent = styled.div`
  display: flex;
  border: 1px solid #dfe1e5;
  min-height: 44px;
  border-radius: 24px;
  width: 100%;
  align-items: center;
  padding-inline: 18px;
  gap: 13px;

  &:hover {
    box-shadow: 0 1px 6px rgb(32 33 36 / 20%);
    background-color: #fff;
    border-color: rgba(223, 225, 229, 0);
  }
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  height: 35px;

  &:focus {
    outline: none;
    border: 0;
  }
`;
