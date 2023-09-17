import { memo } from 'react';

import { SearchResultType } from 'types';

import { Content, Image, Link, Title, Backdrop } from './styled';

interface ICardProps {
  selectedItem: SearchResultType;
  onBackdropClick?: () => void;
}

const Card: React.FC<ICardProps> = ({ selectedItem, onBackdropClick }) => {
  return (
    <>
      <Backdrop onClick={onBackdropClick} />
      <Content>
        <Image style={{ backgroundImage: `url(${selectedItem.image})` }} />
        <Link>{selectedItem.url}</Link>
        <Title>{selectedItem.title}</Title>
        <p>{selectedItem.description}</p>
      </Content>
    </>
  );
};

export default memo(Card);
