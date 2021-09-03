import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {Anime} from '../Components/Anime';
import {useTypeContext} from '../CustomHooks/useTypeContext';
import {NoConnection} from '../Components/NoConnection';
import {useCheckInternet} from '../CustomHooks/useCheckInternet';

export const AnimeScreen = () => {
  const {setType} = useTypeContext();
  const {internet, checkInternet} = useCheckInternet();

  useFocusEffect(
    useCallback(() => {
      setType('anime');
      checkInternet();
    }, []),
  );

  return internet ? <Anime /> : <NoConnection checkInternet={checkInternet} />;
};
