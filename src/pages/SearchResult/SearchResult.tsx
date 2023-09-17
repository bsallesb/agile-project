import React, { memo, useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useFaker } from 'context/FakerContext';

import { Card } from 'components/Card';
import Loader from 'components/Card/Loader';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { ResultList } from 'components/ResultList';
import { Wrapper } from 'components/Wrapper';

import { SearchResultType } from 'types';

import { Container, FirstSection, SecondSection, Content } from './styled';

const SearchResult: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedResult, setSelectedResult] = useState<SearchResultType | null>(
    null,
  );
  const [isLoadingCard, setIsLoadingCard] = useState(false);

  const navigate = useNavigate();

  const { getSearchResults, searchResult, isLoading, setSearchValue } =
    useFaker();

  const handleOnChangeSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const handleOnSearch = useCallback(
    (value: string) => {
      window.scrollTo(0, 0);
      getSearchResults(value);
      navigate('/search');
    },
    [getSearchResults, navigate],
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        setSearchValue(search);
        setSelectedResult(null);
        handleOnSearch(search);
      }
    },
    [setSearchValue, search, handleOnSearch],
  );

  const handleOnClickResult = useCallback((result: SearchResultType) => {
    setIsLoadingCard(true);

    setTimeout(() => {
      setIsLoadingCard(false);
      setSelectedResult(result);
    }, 500);
  }, []);

  return (
    <Wrapper>
      <>
        <Header
          title="Agile Content"
          description="Frontend test"
          searchable
          onChange={handleOnChangeSearch}
          onKeyPress={handleKeyPress}
        />
        <Content>
          <Container>
            <FirstSection>
              <ResultList
                results={searchResult}
                onClick={handleOnClickResult}
                isLoading={isLoading}
              />
            </FirstSection>
            <SecondSection>
              {isLoadingCard && <Loader />}
              {!isLoadingCard && selectedResult && (
                <Card
                  selectedItem={selectedResult}
                  onBackdropClick={() => setSelectedResult(null)}
                />
              )}
            </SecondSection>
          </Container>
        </Content>
        <Footer />
      </>
    </Wrapper>
  );
};

export default memo(SearchResult);
