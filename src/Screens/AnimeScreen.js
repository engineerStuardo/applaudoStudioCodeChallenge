import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {Anime} from '../Components/Anime';
import {useTypeContext} from '../CustomHooks/useTypeContext';

export const AnimeScreen = () => {
  const {setType} = useTypeContext();

  useFocusEffect(
    useCallback(() => {
      setType('anime');
    }, []),
  );

  return <Anime />;
};
