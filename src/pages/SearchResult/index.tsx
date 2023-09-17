import React, { memo, useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { SearchResultType, useFaker } from 'context/FakerContext';

import { Card } from 'components/Card';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { ResultList } from 'components/ResultList';

import { Wrapper, Container, FirstSection, SecondSection } from './styled';

const SearchResult: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedResult, setSelectedResult] = useState<SearchResultType>();

  const navigate = useNavigate();

  const { getSearchResults, searchResult } = useFaker();

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
      <Header
        title="Agile Content"
        description="Frontend test"
        searchable
        onChange={handleOnChangeSearch}
        onKeyPress={handleKeyPress}
      />
      <Container>
        <FirstSection>
          <ResultList results={searchResult} onClick={setSelectedResult} />
        </FirstSection>
        {selectedResult && (
          <SecondSection>
            <Card selectedItem={selectedResult} />
          </SecondSection>
        )}
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default memo(SearchResult);
