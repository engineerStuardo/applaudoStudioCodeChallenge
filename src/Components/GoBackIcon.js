import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {GoBackButton} from '../Styles/DetailStyles';

export const GoBackIcon = ({navigation}) => (
  <GoBackButton
    onPress={() => {
      navigation.goBack();
    }}>
    <Icon name={'chevron-left'} size={35} color={'orange'} />
  </GoBackButton>
);
