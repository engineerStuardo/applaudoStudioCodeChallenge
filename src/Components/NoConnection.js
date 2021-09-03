import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export const NoConnection = ({checkInternet}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>No internet connection</Text>
      <Text>Please try again</Text>
      <TouchableOpacity
        onPress={checkInternet}
        style={{
          backgroundColor: 'orange',
          width: 100,
          height: 30,
          margin: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>Reload</Text>
      </TouchableOpacity>
    </View>
  );
};
