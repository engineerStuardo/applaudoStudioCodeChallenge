import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {LoaderContainer} from '../Styles/ListLoaderStyles';

export const ListLoader = ({loading, loadingSearch}) => {
  return (
    <LoaderContainer>
      {(loading || loadingSearch) && (
        <ActivityIndicator
          animating={true}
          color={Colors.yellow800}
          size={40}
        />
      )}
    </LoaderContainer>
  );
};
