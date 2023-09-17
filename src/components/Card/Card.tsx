import { memo } from 'react';

import { SearchResultType } from 'context/FakerContext';

import { Content, Image, Link, Title } from './styled';

interface ICardProps {
  selectedItem: SearchResultType;
}

const Card: React.FC<ICardProps> = ({ selectedItem }) => {
  console.log({ selectedItem });
  return (
    <Content>
      <Image style={{ backgroundImage: `url(${selectedItem.image})` }} />
      <Link>{selectedItem.url}</Link>
      <Title>{selectedItem.title}</Title>
      <p>{selectedItem.description}</p>
    </Content>
  );
};

export default memo(Card);
