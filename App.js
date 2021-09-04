import React from 'react';

import {MainNavigation} from './src/Navigation/BottomTab';
import {FavoritesProvider} from './src/Context/FavoritesContext';
import {TypeProvider} from './src/Context/TypeContext';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <TypeProvider>
        <FavoritesProvider>
          <MainNavigation />
        </FavoritesProvider>
      </TypeProvider>
    </Provider>
  );
};

export default App;
