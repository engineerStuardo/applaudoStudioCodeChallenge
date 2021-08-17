import React from 'react';
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('screen');

export const AnimeDetail = ({route}) => {
  const {anime} = route.params;
  console.log(JSON.stringify(anime, null, 2));

  return (
    <ScrollView>
      <Animatable.View
        animation="slideInUp"
        delay={400}
        style={{position: 'absolute', top: 0, zIndex: 9}}>
        <Image
          resizeMode="cover"
          style={{width: width, height: height / 1.5}}
          source={{
            uri: anime.item.attributes.posterImage.original,
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
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <Image
            style={{width: 150, height: 250, margin: 15, borderRadius: 15}}
            source={{
              uri: anime.item.attributes.posterImage.original,
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              // backgroundColor: 'red',
              width: width / 2,
            }}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              {anime.item.attributes.titles.en ||
                anime.item.attributes.titles.en_jp}
            </Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Popularity Rank:{' '}
            </Text>
            <Text>{anime.item.attributes.popularityRank || 'Not Found'}</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Rating Rank:</Text>
            <Text> {anime.item.attributes.ratingRank || 'Not Found'}</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Episode Count:
            </Text>
            <Text> {anime.item.attributes.episodeCount || 'Not Found'}</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Episode Length:
            </Text>
            <Text> {anime.item.attributes.episodeLength || 'Not Found'}</Text>
          </View>
        </View>
        <View style={{padding: 25, alignItems: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 15}}>
            Synopsis
          </Text>
          <Text>{anime.item.attributes.synopsis || 'Not Found'}</Text>
        </View>
      </Animatable.View>
    </ScrollView>
  );
};
