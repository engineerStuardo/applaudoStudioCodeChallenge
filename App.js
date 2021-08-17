import React from 'react';

import {MainNavigation} from './src/Navigation/BottomTab';
import {FavoritesProvider} from './src/Context/FavoritesContext';

const App = () => {
  return (
    <FavoritesProvider>
      <MainNavigation />
    </FavoritesProvider>
  );
};

export default App;
