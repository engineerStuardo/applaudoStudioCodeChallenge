import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';

import {MainNavigation} from './src/Navigation/BottomTab';
import {Provider} from 'react-redux';
import {store, persistor} from './src/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
