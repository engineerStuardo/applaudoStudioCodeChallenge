import React, {useState} from 'react';
import {ScrollView} from 'react-native';

import {ListLoader} from './ListLoader';
import {TopCoverImage} from './CoverImage';
import {DetailContainer} from './DetailContainer';
import {useOrientation} from '../CustomHooks/useOrientation';
import {BackgroundImage, DetailMainContainer} from '../Styles/DetailStyles';
import {GoBackIcon} from './GoBackIcon';
import {useDetail} from '../CustomHooks/useDetail';

export const Detail = ({route, navigation}) => {
  const {id, type} = route.params;
  const [moreSynopsis, setMoreSynopsis] = useState(false);
  const orientation = useOrientation();

  const {data, loading} = useDetail(type, id);

  return (
    <>
      {loading && <ListLoader loading />}
      {data && (
        <>
          <ScrollView>
            <BackgroundImage
              source={{
                uri: orientation.isPortrait
                  ? 'white'
                  : data.attributes.posterImage.original,
              }}>
              {orientation.isPortrait && (
                <TopCoverImage dataInfo={data} navigation={navigation} />
              )}
              <DetailMainContainer isPortrait={orientation.isPortrait}>
                <DetailContainer
                  dataInfo={data}
                  moreSynopsis={moreSynopsis}
                  setMoreSynopsis={setMoreSynopsis}
                />
              </DetailMainContainer>
            </BackgroundImage>
          </ScrollView>
          <GoBackIcon navigation={navigation} />
        </>
      )}
    </>
  );
};
