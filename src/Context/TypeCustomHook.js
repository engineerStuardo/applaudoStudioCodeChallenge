import {useContext} from 'react';

import {TypeContext} from './TypeContext';

export const useTypeContext = () => {
  return useContext(TypeContext);
};
