import React, {useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {ListLoader} from '../Components/ListLoader';
import {AnimeDescription} from '../Components/AnimeDescription';
import {getAnime} from '../Services/Services';
import {TopCoverImage} from '../Components/CoverImage';
import {
  YoutubeButton,
  AnimeDescriptionContainer,
  SynopsisContainer,
  SynopsisText,
  ShowMoreText,
} from '../Styles/AnimeDetailStyles';

const {width, height} = Dimensions.get('screen');

export const AnimeDetailContainer = ({
  anime,
  moreSynopsis,
  setMoreSynopsis,
}) => {
  return (
    <AnimeDescriptionContainer
      animation="slideInDown"
      delay={400}
      heightMargin={height}>
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
      <AnimeDescription anime={anime} />
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
    </AnimeDescriptionContainer>
  );
};
