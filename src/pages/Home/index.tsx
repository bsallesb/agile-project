import React, { memo, useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Logo from 'assets/google-logo.png';

import { useFaker } from 'context/FakerContext';

import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { SearchBar } from 'components/SearchBar';

import { Image, Wrapper, SearchSection } from './styled';

const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const { getSearchResults } = useFaker();

  const handleOnChangeSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const handleOnSearch = useCallback(
    (value: string) => {
      getSearchResults(value);
      navigate('/search');
    },
    [getSearchResults, navigate],
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleOnSearch(search);
      }
    },
    [search, handleOnSearch],
  );

  return (
    <Wrapper>
      <Header title="Agile Content" description="Frontend test" />
      <SearchSection>
        <Image src={Logo} alt="Google logo" />
        <SearchBar
          onChange={handleOnChangeSearch}
          onKeyPress={handleKeyPress}
        />
        <div>
          <Button disabled={!search} onClick={() => handleOnSearch(search)} />
        </div>
      </SearchSection>
      <Footer />
    </Wrapper>
  );
};

export default memo(Home);
