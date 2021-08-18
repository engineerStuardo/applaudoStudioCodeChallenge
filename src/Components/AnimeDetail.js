import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styled from 'styled-components/native';
import {CommonActions} from '@react-navigation/native';

import {ListLoader} from '../Components/ListLoader';
import {AnimeDescription} from '../Components/AnimeDescription';

const {width, height} = Dimensions.get('screen');

import {getAnime} from '../Services/Services';

const GoBackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 999;
`;

const YoutubeButton = styled(TouchableOpacity)`
  position: absolute;
  top: 270px;
  left: 70px;
  z-index: 99999;
`;

export const AnimeDetail = ({route, navigation}) => {
  const {animeId, isFavorite} = route.params;
  const [anime, setAnime] = useState();
  const [loading, setLoading] = useState(false);
  const [moreSynopsis, setMoreSynopsis] = useState(false);

  const getAnimeDetail = async () => {
    try {
      setLoading(true);
      const data = await getAnime(animeId);
      console.log(JSON.stringify(data, null, 2));
      setAnime(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnimeDetail();
  }, [animeId]);

  return (
    <ScrollView>
      {loading && <ListLoader loading />}
      {anime && (
        <>
          <GoBackButton
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name={'chevron-left'} size={35} color={'orange'} />
          </GoBackButton>
          <Animatable.View
            animation="slideInUp"
            delay={400}
            style={{position: 'absolute', top: 0, zIndex: 9}}>
            <Image
              resizeMode="cover"
              style={{width: width, height: height / 1.5}}
              source={{
                uri: anime.attributes.posterImage.original,
              }}
            />
          </Animatable.View>
          <Animatable.View
            animation="slideInDown"
            delay={400}
            style={{
              zIndex: 10,
              marginTop: height / 2.5,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: 'white',
              elevation: 50,
            }}>
            <YoutubeButton
              onPress={() => {
                Linking.openURL(
                  `vnd.youtube://watch/${anime.attributes.youtubeVideoId}`,
                ).catch(err => {
                  console.log(err);
                });
              }}>
              <Icon name={'youtube-square'} size={40} color={'red'} />
            </YoutubeButton>
            <AnimeDescription anime={anime} />
            <View style={{padding: 25, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  marginBottom: 15,
                  marginTop: 20,
                }}>
                Synopsis
              </Text>
              <Text>
                {!moreSynopsis
                  ? `${anime.attributes.synopsis.substring(0, 200)}...`
                  : anime.attributes.synopsis || 'Not Found'}
              </Text>
              <TouchableOpacity onPress={() => setMoreSynopsis(!moreSynopsis)}>
                <Text style={{marginTop: 10, color: 'orange'}}>
                  {!moreSynopsis ? 'Show More +' : 'Show Less -'}
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </>
      )}
    </ScrollView>
  );
};
