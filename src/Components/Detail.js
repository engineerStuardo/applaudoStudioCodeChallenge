import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {ListLoader} from './ListLoader';
import {TopCoverImage} from './CoverImage';
import {DetailContainer} from './DetailContainer';
import {useOrientation} from '../CustomHooks/useOrientation';
import {BackgroundImage, DetailMainContainer} from '../Styles/DetailStyles';
import {GoBackIcon} from './GoBackIcon';
import * as actions from '../Redux/Actions/seriesActions';

export const Detail = ({route, navigation}) => {
  const {id, type} = route.params;
  const [moreSynopsis, setMoreSynopsis] = useState(false);
  const orientation = useOrientation();
  const dispatch = useDispatch();
  const {animeDetail, mangaDetail, loading} = useSelector(
    state => state.seriesReducer,
  );
  const [data, setData] = useState({});

  useEffect(() => {
    if (type === 'anime') {
      dispatch(actions.getDataAnimeById(id));
    } else {
      dispatch(actions.getDataMangaById(id));
    }
  }, []);

  useEffect(() => {
    if (type === 'anime') {
      setData(animeDetail);
    } else {
      setData(mangaDetail);
    }
  }, [animeDetail, mangaDetail]);

  return (
    <>
      {loading && <ListLoader loading />}
      {data && Object.keys(data).length > 0 && (
        <>
          <ScrollView>
            <BackgroundImage
              source={{
                uri: orientation.isPortrait
                  ? 'https://upload.wikimedia.org/wikipedia/commons/9/99/White_Background_%28To_id_screen_dust_during_cleanup%29.jpg'
                  : data.data.attributes.posterImage.original,
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
