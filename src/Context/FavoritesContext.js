import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = anime => {
    setFavorites([...favorites, anime]);
  };

  const removeFromFavorites = id => {
    const newFavorites = favorites.filter(item => item.id !== id);
    setFavorites(newFavorites);
  };

  const saveFavorites = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@animes`, jsonValue);
    } catch (e) {
      console.log('Error storing', e);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem(`@animes`);
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log('Error loading ', e);
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{favorites, addToFavorites, removeFromFavorites}}>
      {children}
    </FavoritesContext.Provider>
  );
};
