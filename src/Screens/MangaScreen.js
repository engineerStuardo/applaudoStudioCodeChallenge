import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {Manga} from '../Components/Manga';
import {useTypeContext} from '../CustomHooks/useTypeContext';

export const MangaScreen = () => {
  const {setType} = useTypeContext();

  useFocusEffect(
    useCallback(() => {
      setType('manga');
    }, []),
  );

  return <Manga />;
};
