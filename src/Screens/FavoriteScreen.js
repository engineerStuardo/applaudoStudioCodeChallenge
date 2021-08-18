import React from 'react';
import {View, FlatList, Image, Text} from 'react-native';
import {useFavoritesContext} from '../Context/FavoritesCustomHook';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {FavoriteComponent} from '../Components/FavoriteComponent';

export const FavoriteScreen = () => {
  const {favorites} = useFavoritesContext();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      {favorites.length > 0 ? (
        <>
          <Animatable.Image
            animation="zoomIn"
            iterationCount="infinite"
            style={{width: '100%', height: 200}}
            source={require('../Assets/Images/favorite.jpg')}
          />
          <FlatList
            data={favorites}
            renderItem={favorite => <FavoriteComponent favorite={favorite} />}
            keyExtractor={favorite => favorite.id}
          />
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Animatable.View animation="pulse" iterationCount="infinite">
            <Icon name={'heart'} size={50} color={'orange'} />
          </Animatable.View>
          <Text style={{fontSize: 35, marginBottom: 30}}>Favorites</Text>
          <Text style={{fontSize: 17}}>No favorites yet...</Text>
          <Button
            style={{marginTop: 50, padding: 5}}
            icon="heart"
            mode="outlined"
            color={'#f08e25'}
            onPress={() =>
              navigation.navigate('Anime', {screen: 'AnimeScreen'})
            }>
            Go to Anime
          </Button>
        </View>
      )}
    </View>
  );
};
