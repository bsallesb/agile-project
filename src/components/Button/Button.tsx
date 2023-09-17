import { memo } from 'react';

import { ButtonStyled } from './styled';

interface IButtonProps {
  label?: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  label = 'Buscar',
  onClick,
  disabled,
}) => {
  return (
    <ButtonStyled type="button" disabled={disabled} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};

export default memo(Button);
