import React, {useState} from 'react';

import {Manga} from '../Components/Manga';

export const MangaScreen = () => {
  const [type, setType] = useState('manga');
  return <Manga type={type} />;
};
