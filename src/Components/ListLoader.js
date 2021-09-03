import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {LoaderContainer} from '../Styles/ListLoaderStyles';

export const ListLoader = ({loading, loadingSearch, loadingScreen}) => {
  return (
    <LoaderContainer>
      {(loading || loadingSearch || loadingScreen) && (
        <ActivityIndicator
          animating={true}
          color={Colors.yellow800}
          size={40}
        />
      )}
    </LoaderContainer>
  );
};
