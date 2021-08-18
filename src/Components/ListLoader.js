import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

export const ListLoader = ({loading, loadingSearch}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
      }}>
      {(loading || loadingSearch) && (
        <ActivityIndicator
          animating={true}
          color={Colors.yellow800}
          size={40}
        />
      )}
    </View>
  );
};
