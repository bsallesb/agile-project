import { memo } from 'react';

import { useFaker } from 'context/FakerContext';

import { SearchResultType } from 'types';

import Loader from './Loader';
import { List, Link, Title, Button } from './styled';

interface IResultListProps {
  results: SearchResultType[];
  onClick: (value: SearchResultType) => void;
  isLoading?: boolean;
}

const ResultList: React.FC<IResultListProps> = ({
  results,
  onClick,
  isLoading = false,
}) => {
  const { searchValue } = useFaker();

  return (
    <List>
      {isLoading && <Loader />}
      {!isLoading &&
        results &&
        results.map((result) => (
          <li key={result.id}>
            <Button type="button" onClick={() => onClick(result)}>
              <Link>{result.url}</Link>
            </Button>
            <Button type="button" onClick={() => onClick(result)}>
              <Title>{result.title}</Title>
            </Button>
            <p>{result.description}</p>
          </li>
        ))}
      {!isLoading && !results.length && searchValue && (
        <>
          <li>
            No results found for <strong>{`'${searchValue}'`}</strong>
          </li>
          <li>
            Try looking for:{' '}
            <strong>
              bear, bird, cat, cetacean, cow, crocodilia, dog, fish, horse,
              insect, lion, rabbit, rodent, snake
            </strong>
          </li>
        </>
      )}
      {!isLoading && !results.length && !searchValue && (
        <li>
          Try looking for:{' '}
          <strong>
            bear, bird, cat, cetacean, cow, crocodilia, dog, fish, horse,
            insect, lion, rabbit, rodent, snake
          </strong>
        </li>
      )}
    </List>
  );
};

export default memo(ResultList);
