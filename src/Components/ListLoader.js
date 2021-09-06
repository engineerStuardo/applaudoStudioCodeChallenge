import React from 'react';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {LoaderContainer} from '../Styles/ListLoaderStyles';

export const ListLoader = ({loading, loadingSearch, loadingFooter}) => {
  return (
    <LoaderContainer>
      {(loading || loadingSearch || loadingFooter) && (
        <ActivityIndicator
          animating={true}
          color={Colors.yellow800}
          size={40}
        />
      )}
    </LoaderContainer>
  );
};
