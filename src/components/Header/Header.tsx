import { memo, useCallback } from 'react';

import { IoApps } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import Logo from 'assets/google-logo.png';
import UserPhoto from 'assets/user.jpg';

import { SearchBar } from 'components/SearchBar';
import { User } from 'components/User';

import {
  Wrapper,
  Section,
  UserSection,
  Title,
  Description,
  Image,
  SearchContent,
} from './styled';

interface IHeaderProps {
  title: string;
  description?: string;
  searchable?: boolean;
  onChange?: (value: string) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Header: React.FC<IHeaderProps> = ({
  title,
  description,
  searchable = false,
  onChange,
  onKeyPress,
}) => {
  const handleChange = useCallback(
    (value: string) => {
      if (onChange) {
        onChange(value);
      }
    },
    [onChange],
  );

  return (
    <Wrapper>
      {!searchable && (
        <Section $gap={8} $searchable={searchable}>
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}
        </Section>
      )}
      {searchable && (
        <Section $gap={searchable ? 24 : 8} $searchable={searchable}>
          <Link to="/">
            <Image src={Logo} alt="Google logo" />
          </Link>
          <SearchContent>
            <SearchBar onChange={handleChange} onKeyPress={onKeyPress} />
          </SearchContent>
        </Section>
      )}
      <UserSection $searchable={searchable}>
        <IoApps size={24} color="#5f6368" />
        <User picture={UserPhoto} size={40} />
      </UserSection>
    </Wrapper>
  );
};

export default memo(Header);
