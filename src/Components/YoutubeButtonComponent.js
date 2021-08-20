import React from 'react';
import {Text, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {YoutubeButton, NoVideoText} from '../Styles/DetailStyles';

export const YoutubeButtonComponent = ({youtubeVideoId}) => (
  <>
    {youtubeVideoId ? (
      <YoutubeButton
        onPress={() => {
          Linking.openURL(`vnd.youtube://watch/${youtubeVideoId}`).catch(
            err => {
              console.log(err);
            },
          );
        }}>
        <Icon name={'youtube-square'} size={40} color={'red'} />
      </YoutubeButton>
    ) : (
      <NoVideoText>
        <Text>No video available</Text>
      </NoVideoText>
    )}
  </>
);
