import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {ListLoader} from './ListLoader';
import {TopCoverImage} from './CoverImage';
import {DetailContainer} from './DetailContainer';
import {useOrientation} from '../CustomHooks/useOrientation';
import {BackgroundImage, DetailMainContainer} from '../Styles/DetailStyles';
import {GoBackIcon} from './GoBackIcon';
import {useDetail} from '../CustomHooks/useDetail';
import * as actions from '../Redux/Actions/seriesActions';

export const Detail = ({route, navigation}) => {
  const {id} = route.params;
  const [moreSynopsis, setMoreSynopsis] = useState(false);
  const orientation = useOrientation();
  const dispatch = useDispatch();
  const {type, animeDetail, loading} = useSelector(
    state => state.seriesReducer,
  );
  const [data, setData] = useState({});

  useEffect(() => {
    dispatch(actions.getDataAnimeById(id));
  }, []);

  useEffect(() => {
    setData(animeDetail);
  }, [animeDetail]);

  return (
    <>
      {loading && <ListLoader loading />}
      {data && Object.keys(data).length > 0 && (
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
