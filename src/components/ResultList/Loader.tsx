import { memo, useMemo } from 'react';

import { LoaderContent } from './styled';

const LoaderResultList: React.FC = () => {
  const loadingItem = useMemo(
    () => (
      <li>
        <LoaderContent
          speed={2}
          height={94}
          backgroundColor="#d4d3db"
          foregroundColor="#ece4e4"
          overflow="hidden"
        >
          <rect x="0" y="0" rx="5" ry="5" width="128" height="14" />
          <rect x="0" y="22" rx="5" ry="5" width="200" height="23" />
          <rect x="0" y="53" rx="5" ry="5" width="90%" height="37" />
        </LoaderContent>
      </li>
    ),
    [],
  );

  return <>{new Array(10).fill(loadingItem)}</>;
};

export default memo(LoaderResultList);
