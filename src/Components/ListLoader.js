import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

export const ListLoader = ({loading}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
      }}>
      {loading && (
        <ActivityIndicator
          animating={true}
          color={Colors.yellow800}
          size={40}
        />
      )}
    </View>
  );
};
