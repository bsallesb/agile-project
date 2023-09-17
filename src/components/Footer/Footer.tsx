import { memo } from 'react';

import { Wrapper, Text } from './styled';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Text>Google 2023</Text>
      <Text>version: 0.1.0</Text>
    </Wrapper>
  );
};

export default memo(Footer);
