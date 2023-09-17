import React, { memo, useCallback, useState } from 'react';

import { IoMdSearch, IoMdClose } from 'react-icons/io';

import { InteractiveIcon } from 'components/InteractiveIcon';

import { Input, SearchContent } from './styled';

interface ISearchBarProps {
  onChange: (value: string) => void;
  onKeyPress: ((e: React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
}

const SearchBar: React.FC<ISearchBarProps> = ({ onChange, onKeyPress }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <SearchContent>
      <IoMdSearch color="#9aa0a6" size={18} />
      <Input
        value={searchValue}
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
      {searchValue && (
        <InteractiveIcon
          icon={<IoMdClose color="#9aa0a6" size={18} />}
          onClick={() => setSearchValue('')}
        />
      )}
    </SearchContent>
  );
};

export default memo(SearchBar);
