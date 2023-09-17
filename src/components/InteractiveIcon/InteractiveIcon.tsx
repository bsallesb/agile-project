import { memo } from 'react';

import { Button } from './styled';

interface IInteractiveIconProps {
  icon: React.ReactElement;
  onClick: () => void;
}

const InteractiveIcon: React.FC<IInteractiveIconProps> = ({
  icon,
  onClick,
}) => {
  return (
    <Button type="button" onClick={onClick}>
      {icon}
    </Button>
  );
};

export default memo(InteractiveIcon);
