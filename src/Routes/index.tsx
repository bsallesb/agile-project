import { memo } from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import SearchResult from 'pages/SearchResult';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResult />} />
      </Switch>
    </BrowserRouter>
  );
};

export default memo(Routes);
