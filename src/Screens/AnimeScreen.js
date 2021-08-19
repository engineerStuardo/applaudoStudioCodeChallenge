import React, {useState} from 'react';

import {Anime} from '../Components/Anime';

export const AnimeScreen = () => {
  const [type, setType] = useState('anime');
  return <Anime type={type} />;
};
