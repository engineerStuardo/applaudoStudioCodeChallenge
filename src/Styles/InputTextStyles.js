import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

const InputContainer = styled(View)`
  padding: 25px;
  padding-bottom: 15px;
`;

const InputTextField = styled(TextInput)`
  height: 40px;
`;

const InputTextIcon = styled(TextInput)`
  margin-top: 12px;
`;

export {InputContainer, InputTextField, InputTextIcon};
