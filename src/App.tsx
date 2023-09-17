import { memo } from 'react';

import { FakerProvider } from 'context/FakerContext';

import Routes from 'Routes';

import { GlobalStyle } from './styles/global';

const App: React.FC = () => (
  <FakerProvider>
    <Routes />
    <GlobalStyle />
  </FakerProvider>
);

export default memo(App);
