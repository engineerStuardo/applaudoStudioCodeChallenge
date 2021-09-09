import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {Manga} from '../Components/Manga';
import {NoConnection} from '../Components/NoConnection';
import {useCheckInternet} from '../CustomHooks/useCheckInternet';
import * as actions from '../Redux/Actions/seriesActions';

export const MangaScreen = () => {
  const {internet, checkInternet} = useCheckInternet();
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(actions.addType('manga'));
      checkInternet();
    }, []),
  );

  return internet ? <Manga /> : <NoConnection checkInternet={checkInternet} />;
};
