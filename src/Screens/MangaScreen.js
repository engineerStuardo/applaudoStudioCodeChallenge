import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {Manga} from '../Components/Manga';
import {useTypeContext} from '../CustomHooks/useTypeContext';
import {NoConnection} from '../Components/NoConnection';
import {useCheckInternet} from '../CustomHooks/useCheckInternet';

export const MangaScreen = () => {
  const {setType} = useTypeContext();
  const {internet, checkInternet} = useCheckInternet();

  useFocusEffect(
    useCallback(() => {
      setType('manga');
      checkInternet();
    }, []),
  );

  return internet ? <Manga /> : <NoConnection checkInternet={checkInternet} />;
};
