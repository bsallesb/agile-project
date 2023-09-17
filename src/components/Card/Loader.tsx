import { memo } from 'react';

import {
  Content,
  FirstLine,
  SecondLine,
  LoaderContent,
  Backdrop,
} from './styled';

const Card: React.FC = () => {
  return (
    <>
      <Backdrop />
      <Content>
        <LoaderContent
          speed={2}
          width="100%"
          height={435}
          backgroundColor="#d4d3db"
          foregroundColor="#ece4e4"
        >
          <rect x="0" y="0" rx="5" ry="5" width="100%" height="65%" />
          <rect x="0" y="67%" rx="5" ry="5" width="40%" height="14" />
          <rect x="0" y="73%" rx="5" ry="5" width="60%" height="23" />
          <FirstLine x="0" y="81%" rx="5" ry="5" width="100%" height="74" />
          <SecondLine x="0" y="83%" rx="5" ry="5" width="100%" height="74" />
        </LoaderContent>
      </Content>
    </>
  );
};

export default memo(Card);
