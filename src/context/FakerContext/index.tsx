import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { faker } from '@faker-js/faker';

import { isSearchType } from 'helpers';

export type SearchResultType = {
  type: string;
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
};

export type SearchType =
  | 'bear'
  | 'bird'
  | 'cat'
  | 'cetacean'
  | 'cow'
  | 'crocodilia'
  | 'dog'
  | 'fish'
  | 'horse'
  | 'insect'
  | 'lion'
  | 'rabbit'
  | 'rodent'
  | 'snake';

interface IFakerContextProps {
  getSearchResults: (search: string) => void;
  isLoading: boolean;
  searchResult: SearchResultType[];
  error: boolean;
}
interface IFakerProviderProps {
  children: React.ReactNode;
}

export const ReactFakerContext = createContext<IFakerContextProps>(
  {} as IFakerContextProps,
);

export const FakerProvider: React.FC<IFakerProviderProps> = ({ children }) => {
  const [searchResult, setSearchResult] = useState<SearchResultType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(false);

  const getSearchResults = useCallback((search: string) => {
    setError(false);
    setIsLoading(true);

    if (isSearchType(search)) {
      const results = [...new Array(15)].map((item, index) => {
        return {
          type: faker.animal[search](),
          id: index + 1,
          url: faker.internet.url(),
          title: faker.lorem.words(),
          description: faker.lorem.sentences(),
          image: faker.image.animals(644, 362, true),
        };
      });

      setTimeout(() => {
        setIsLoading(false);
        setSearchResult(results);
      }, 3000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setError(true);
      }, 3000);
    }
  }, []);

  return (
    <ReactFakerContext.Provider
      value={useMemo(
        () => ({
          getSearchResults,
          isLoading,
          searchResult,
          error,
        }),
        [getSearchResults, isLoading, searchResult, error],
      )}
    >
      {children}
    </ReactFakerContext.Provider>
  );
};

export const useFaker = (): IFakerContextProps => {
  const context = useContext(ReactFakerContext);

  if (!context) {
    throw new Error('useFakerHook must be within FakerProvider');
  }

  return context;
};
