import React from 'react';
import {View, Keyboard} from 'react-native';
import {TextInput, Colors} from 'react-native-paper';

import {
  InputContainer,
  InputTextField,
  InputTextIcon,
} from '../Styles/InputTextStyles';

export const InputText = ({search, setSearch, searchAnime, getData}) => {
  return (
    <InputContainer>
      <InputTextField
        mode="outlined"
        label="Search Anime"
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
