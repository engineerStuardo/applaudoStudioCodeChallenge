import React from 'react';
import {Text, Dimensions, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {Description} from './Description';
import {
  YoutubeButton,
  NoVideoText,
  DescriptionContainer,
  SynopsisContainer,
  SynopsisText,
  ShowMoreText,
} from '../Styles/DetailStyles';

const {width, height} = Dimensions.get('screen');

export const DetailContainer = ({anime, moreSynopsis, setMoreSynopsis}) => {
  return (
    <DescriptionContainer
      animation="slideInDown"
      delay={400}
      heightMargin={height}>
      {anime.attributes.youtubeVideoId ? (
        <YoutubeButton
          onPress={() => {
            Linking.openURL(
              `vnd.youtube://watch/${anime.attributes.youtubeVideoId}`,
            ).catch(err => {
              console.log(err);
            });
          }}>
          <Icon name={'youtube-square'} size={40} color={'red'} />
        </YoutubeButton>
      ) : (
        <NoVideoText>
          <Text>No video available</Text>
        </NoVideoText>
      )}

      <Description anime={anime} />
      <SynopsisContainer>
        <SynopsisText>Synopsis</SynopsisText>
        <Text>
          {!moreSynopsis
            ? `${anime.attributes.synopsis.substring(0, 200)}...`
            : anime.attributes.synopsis || 'Not Found'}
        </Text>
        <TouchableOpacity onPress={() => setMoreSynopsis(!moreSynopsis)}>
          <ShowMoreText>
            {!moreSynopsis ? 'Show More +' : 'Show Less -'}
          </ShowMoreText>
        </TouchableOpacity>
      </SynopsisContainer>
    </DescriptionContainer>
  );
};
