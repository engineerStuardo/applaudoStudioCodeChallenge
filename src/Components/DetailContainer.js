import React from 'react';
import {Text, Dimensions, TouchableOpacity, Share} from 'react-native';

import {
  DescriptionContainer,
  SynopsisContainer,
  SynopsisText,
  ShowMoreText,
} from '../Styles/DetailStyles';
import {Description} from './Description';
import {YoutubeButtonComponent} from './YoutubeButtonComponent';
import {ShareButtonComponent} from './ShareButtonComponent';
import {useOrientation} from '../CustomHooks/useOrientation';

const {height} = Dimensions.get('screen');

export const DetailContainer = ({dataInfo, moreSynopsis, setMoreSynopsis}) => {
  const {
    data: {
      attributes: {youtubeVideoId, synopsis, titles},
    },
  } = dataInfo;
  const orientation = useOrientation();

  const share = async () => {
    try {
      await Share.share({
        message: titles.en || titles.en_jp,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DescriptionContainer
      screenHeight={Dimensions.get('window').height}
      isPortrait={orientation.isPortrait}
      animation="slideInDown"
      delay={400}
      heightMargin={height}>
      <YoutubeButtonComponent youtubeVideoId={youtubeVideoId} />
      <ShareButtonComponent youtubeVideoId={youtubeVideoId} share={share} />
      <Description dataInfo={dataInfo} />
      <SynopsisContainer>
        <SynopsisText>Synopsis</SynopsisText>
        <Text>
          {!moreSynopsis
            ? `${synopsis.substring(0, 125)}...`
            : synopsis || 'Not Found'}
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
