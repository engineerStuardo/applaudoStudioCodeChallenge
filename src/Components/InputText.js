import React from 'react';
import {Keyboard} from 'react-native';
import {Colors} from 'react-native-paper';

import {
  InputContainer,
  InputTextField,
  InputTextIcon,
} from '../Styles/InputTextStyles';
import {useTypeContext} from '../CustomHooks/useTypeContext';

export const InputText = ({
  searchText,
  setSearchText,
  searchCategoryByText,
  getData,
  isPortrait,
}) => {
  const {type} = useTypeContext();

  return (
    <InputContainer isPortrait={isPortrait} animation="fadeInLeft">
      <InputTextField
        mode="flat"
        label={type === 'anime' ? 'Search Anime' : 'Search Manga'}
        value={searchText}
        textContentType="name"
        keyboardType="default"
        autoCapitalize="none"
        onChangeText={search => setSearchText(search)}
        theme={{colors: {primary: 'orange'}}}
        onSubmitEditing={() => {
          searchCategoryByText(searchText);
        }}
        right={
          <InputTextIcon.Icon
            name="backspace"
            color={Colors.orange500}
            size={30}
            onPress={() => {
              const start = true;
              Keyboard.dismiss();
              setSearchText('');
              getData(start);
            }}
          />
        }
      />
    </InputContainer>
  );
};
