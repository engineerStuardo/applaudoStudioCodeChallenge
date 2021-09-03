import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';

import {Anime} from '../Components/Anime';
import {useTypeContext} from '../CustomHooks/useTypeContext';
import {NoConnection} from '../Components/NoConnection';

export const AnimeScreen = () => {
  const [internet, setInternet] = useState();
  const {setType} = useTypeContext();

  const checkInternet = async () => {
    const state = await NetInfo.fetch();
    !state.isConnected ? setInternet(false) : setInternet(true);
  };

  useFocusEffect(
    useCallback(() => {
      setType('anime');
      checkInternet();
    }, []),
  );

  return internet ? <Anime /> : <NoConnection checkInternet={checkInternet} />;
};
