import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {ListLoader} from '../Components/ListLoader';
import {InputText} from '../Components/InputText';
import {ListImages} from '../Components/ListImages';
import {ScreenContainer, Logo, NotFound} from '../Styles/ScreenStyles';
import {useOrientation} from '../CustomHooks/useOrientation';
import * as actions from '../Redux/Actions/seriesActions';

export const Anime = () => {
  const orientation = useOrientation();
  const dispatch = useDispatch();
  const {loading, type, anime, offsetAnime} = useSelector(
    state => state.seriesReducer,
  );

  useEffect(() => {
    type === 'anime' && dispatch(actions.getData(type, false, 0));
  }, [type]);

  return (
    <>
      <ScreenContainer animation="flipInY" isPortrait={orientation.isPortrait}>
        <View>
          <InputText isPortrait={orientation.isPortrait} />
          <Logo
            animation="pulse"
            iterationCount="infinite"
            source={require('../Assets/Images/anime.png')}
          />
        </View>
        {loading ? (
          <ListLoader loading />
        ) : anime.length === 0 ? (
          <NotFound>
            <Text>No Anime was found... Try again.</Text>
          </NotFound>
        ) : (
          <ListImages dataList={anime} offset={offsetAnime} />
        )}
      </ScreenContainer>
    </>
  );
};
