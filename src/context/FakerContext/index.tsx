import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { faker } from '@faker-js/faker';

import { isSearchType } from 'helpers';

import { SearchResultType } from 'types';

interface IFakerContextProps {
  getSearchResults: (search: string) => void;
  isLoading: boolean;
  searchResult: SearchResultType[];
  error: boolean;
  setSearchValue: (value: string) => void;
  searchValue: string;
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
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(false);

  const getSearchResults = useCallback((search: string) => {
    setSearchResult([]);
    setError(false);
    setIsLoading(true);

    const searchValue = search.toLocaleLowerCase()

    if (isSearchType(searchValue)) {
      const results = [...new Array(15)].map((item, index) => {
        return {
          type: faker.animal[searchValue](),
          id: index + 1,
          url: faker.internet.url(),
          title: faker.lorem.words(),
          description: faker.lorem.sentences(),
          image: faker.image.urlLoremFlickr({ category: search }),
        };
      });

      setTimeout(() => {
        setIsLoading(false);
        setSearchResult(results);
      }, 1000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setError(true);
      }, 1000);
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
          searchValue,
          setSearchValue,
        }),
        [
          getSearchResults,
          isLoading,
          searchResult,
          error,
          searchValue,
          setSearchValue,
        ],
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
