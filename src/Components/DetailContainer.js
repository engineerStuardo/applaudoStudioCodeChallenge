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

export const DetailContainer = ({dataInfo, moreSynopsis, setMoreSynopsis}) => {
  return (
    <DescriptionContainer
      animation="slideInDown"
      delay={400}
      heightMargin={height}>
      {dataInfo.attributes.youtubeVideoId ? (
        <YoutubeButton
          onPress={() => {
            Linking.openURL(
              `vnd.youtube://watch/${dataInfo.attributes.youtubeVideoId}`,
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

      <Description dataInfo={dataInfo} />
      <SynopsisContainer>
        <SynopsisText>Synopsis</SynopsisText>
        <Text>
          {!moreSynopsis
            ? `${dataInfo.attributes.synopsis.substring(0, 200)}...`
            : dataInfo.attributes.synopsis || 'Not Found'}
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
