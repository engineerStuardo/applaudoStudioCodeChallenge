import React from 'react';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {
  GoBackButton,
  CoverImageContainer,
  CoverImage,
} from '../Styles/DetailStyles';

const {width, height} = Dimensions.get('screen');

export const TopCoverImage = ({anime, navigation}) => {
  return (
    <>
      <GoBackButton
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name={'chevron-left'} size={35} color={'orange'} />
      </GoBackButton>
      <CoverImageContainer animation="slideInUp" delay={400}>
        <CoverImage
          coverWidth={width}
          coverHeight={height}
          resizeMode="cover"
          source={{
            uri: anime.attributes.posterImage.original,
          }}
        />
      </CoverImageContainer>
    </>
  );
};
