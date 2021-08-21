import React from 'react';
import {Keyboard} from 'react-native';
import {Colors} from 'react-native-paper';

import {
  InputContainer,
  InputTextField,
  InputTextIcon,
} from '../Styles/InputTextStyles';
import {useTypeContext} from '../Context/TypeCustomHook';

export const InputText = ({
  search,
  setSearch,
  searchAnime,
  getData,
  isPortrait,
}) => {
  const {type} = useTypeContext();

  return (
    <InputContainer isPortrait={isPortrait}>
      <InputTextField
        mode="outlined"
        label={type === 'anime' ? 'Search Anime' : 'Search Manga'}
        value={search}
        textContentType="name"
        keyboardType="default"
        autoCapitalize="none"
        onChangeText={search => setSearch(search)}
        theme={{colors: {primary: 'orange'}}}
        onSubmitEditing={() => {
          searchAnime(search);
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
              getData(start);
            }}
          />
        }
      />
    </InputContainer>
  );
};
