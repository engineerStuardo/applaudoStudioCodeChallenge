import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useCheckInternet = () => {
  const [internet, setInternet] = useState(true);

  const checkInternet = async () => {
    const state = await NetInfo.fetch();
    !state.isConnected ? setInternet(false) : setInternet(true);
  };

  return {internet, checkInternet};
};
