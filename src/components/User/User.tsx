import { memo } from 'react';

import { Image } from './styled';

interface IUserProps {
  picture: string;
  size: number;
}

const User: React.FC<IUserProps> = ({ picture, size = 40 }) => {
  return <Image style={{ backgroundImage: `url(${picture})` }} $size={size} />;
};

export default memo(User);
