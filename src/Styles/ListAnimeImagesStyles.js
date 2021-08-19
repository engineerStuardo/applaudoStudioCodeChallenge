import React, {useState, useEffect} from 'react';
import {View, FlatList, Dimensions, Image, Keyboard} from 'react-native';
import {TextInput, Colors} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';
import {getAnimeData, getAnimeSearch} from '../Services/Services';
import {CardList} from '../Components/CardList';
import {ListLoader} from '../Components/ListLoader';
import {InputText} from '../Components/InputText';
import {AnimeLogo} from '../Styles/AnimeScreenStyles';

const {width, height} = Dimensions.get('screen');

const ListImageContainer = styled(View)`
  flex: 1;
  width: ${props => `${props.containerWidth}px`};
  align-items: center;
`;

export {ListImageContainer};
