import {useContext} from 'react';

import {TypeContext} from '../Context/TypeContext';

export const useTypeContext = () => {
  return useContext(TypeContext);
};
