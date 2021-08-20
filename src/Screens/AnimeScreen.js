import React, {useState, useEffect} from 'react';

import {Anime} from '../Components/Anime';
import {useTypeContext} from '../Context/TypeCustomHook';

export const AnimeScreen = () => {
  const {setType} = useTypeContext();

  useEffect(() => {
    setType('anime');
  }, []);

  return <Anime />;
};
