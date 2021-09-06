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
  const {loadingAnime, anime} = useSelector(state => state.seriesReducer);

  useEffect(() => {
    dispatch(actions.getDataAnime(false, 0));
  }, []);

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
        {loadingAnime ? (
          <ListLoader loading={loadingAnime} />
        ) : (
          <ListImages dataList={anime} />
        )}
      </ScreenContainer>
    </>
  );
};
