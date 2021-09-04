import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {Anime} from '../Components/Anime';
import {useTypeContext} from '../CustomHooks/useTypeContext';
import {NoConnection} from '../Components/NoConnection';
import {useCheckInternet} from '../CustomHooks/useCheckInternet';
import * as actions from '../Redux/Actions/seriesActions';

export const AnimeScreen = () => {
  const {setType} = useTypeContext();
  const {internet, checkInternet} = useCheckInternet();
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      setType('anime');
      dispatch(actions.addType('anime'));
      checkInternet();
    }, []),
  );

  return internet ? <Anime /> : <NoConnection checkInternet={checkInternet} />;
};
