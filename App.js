import React from 'react';

import {MainNavigation} from './src/Navigation/BottomTab';
import {FavoritesProvider} from './src/Context/FavoritesContext';
import {TypeProvider} from './src/Context/TypeContext';

const App = () => {
  return (
    <TypeProvider>
      <FavoritesProvider>
        <MainNavigation />
      </FavoritesProvider>
    </TypeProvider>
  );
};

export default App;
