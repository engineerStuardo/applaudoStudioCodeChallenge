import React from 'react';
import {Dimensions} from 'react-native';

import {CoverImageContainer, CoverImage} from '../Styles/DetailStyles';

const {width, height} = Dimensions.get('screen');

export const TopCoverImage = ({dataInfo}) => {
  return (
    <>
      <CoverImageContainer animation="slideInUp" delay={400}>
        <CoverImage
          coverWidth={width}
          coverHeight={height}
          resizeMode="cover"
          source={{
            uri: dataInfo.data.attributes.posterImage.original,
          }}
        />
      </CoverImageContainer>
    </>
  );
};
