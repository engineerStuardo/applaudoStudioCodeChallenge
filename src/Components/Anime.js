import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {ListLoader} from '../Components/ListLoader';
import {InputText} from '../Components/InputText';
import {ListImages} from '../Components/ListImages';
import {ScreenContainer, Logo, NotFound} from '../Styles/ScreenStyles';
import {useOrientation} from '../CustomHooks/useOrientation';
import {useApi} from '../CustomHooks/useApi';
import * as actions from '../Redux/Actions/seriesActions';

export const Anime = () => {
  const orientation = useOrientation();
  const dispatch = useDispatch();
  const {loading, type, anime, loadingSearch} = useSelector(
    state => state.seriesReducer,
  );

  useEffect(() => {
    dispatch(actions.getData('anime', false, 0));
  }, []);

  return (
    <>
      {loading ? (
        <ListLoader loadingScreen />
      ) : (
        <ScreenContainer
          animation="flipInY"
          isPortrait={orientation.isPortrait}>
          <View>
            <InputText isPortrait={orientation.isPortrait} />
            <Logo
              animation="pulse"
              iterationCount="infinite"
              source={require('../Assets/Images/anime.png')}
            />
          </View>
          {loadingSearch && <ListLoader loadingSearch />}
          {anime.length === 0 ? (
            <NotFound>
              <Text>No Anime was found... Try again.</Text>
            </NotFound>
          ) : (
            <ListImages dataList={anime} />
          )}
        </ScreenContainer>
      )}
    </>
  );
};
