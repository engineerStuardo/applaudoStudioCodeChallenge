import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {Colors} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';

import {
  InputContainer,
  InputTextField,
  InputTextIcon,
} from '../Styles/InputTextStyles';
import * as actions from '../Redux/Actions/seriesActions';

export const InputText = ({isPortrait}) => {
  const [search, setSearch] = useState();
  const {type, offsetAnimeSearch, offsetMangaSearch} = useSelector(
    state => state.seriesReducer,
  );
  const dispatch = useDispatch();

  return (
    <InputContainer isPortrait={isPortrait} animation="fadeInLeft">
      <InputTextField
        mode="flat"
        label={type === 'anime' ? 'Search Anime' : 'Search Manga'}
        value={search}
        textContentType="name"
        keyboardType="default"
        autoCapitalize="none"
        onChangeText={search => setSearch(search)}
        theme={{colors: {primary: 'orange'}}}
        onSubmitEditing={() => {
          if (type === 'anime') {
            dispatch(
              actions.getDataAnimeSearch(search, offsetAnimeSearch, true),
            );
          } else {
            dispatch(
              actions.getDataMangaSearch(search, offsetMangaSearch, true),
            );
          }
        }}
        right={
          <InputTextIcon.Icon
            name="backspace"
            color={Colors.orange500}
            size={30}
            onPress={() => {
              const start = true;
              Keyboard.dismiss();
              setSearch('');
              if (type == 'anime') {
                dispatch(actions.getDataAnime(start));
              } else {
                dispatch(actions.getDataManga(start));
              }
            }}
          />
        }
      />
    </InputContainer>
  );
};
