import { memo } from 'react';

import { SearchResultType } from 'context/FakerContext';

import { List, Link, Title, Button } from './styled';

interface IResultListProps {
  results: SearchResultType[];
  onClick: (value: SearchResultType) => void;
}

const ResultList: React.FC<IResultListProps> = ({ results, onClick }) => {
  return (
    <List>
      {results &&
        results.map((result) => (
          <li>
            <Button type="button" onClick={() => onClick(result)}>
              <Link>{result.url}</Link>
            </Button>
            <Button type="button" onClick={() => onClick(result)}>
              <Title>{result.title}</Title>
            </Button>
            <p>{result.description}</p>
          </li>
        ))}
    </List>
  );
};

export default memo(ResultList);
