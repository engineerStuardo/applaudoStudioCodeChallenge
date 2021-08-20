import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {ShareButton} from '../Styles/DetailStyles';

export const ShareButtonComponent = ({youtubeVideoId, share}) => (
  <ShareButton videoAvailable={youtubeVideoId} onPress={share}>
    <Icon name={'share-alt'} size={35} color={'orange'} />
  </ShareButton>
);
