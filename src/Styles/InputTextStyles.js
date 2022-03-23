import {TextInput} from 'react-native-paper';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

const InputContainer = styled(Animatable.View)`
  padding: 25px;
  padding-bottom: 15px;
  width: ${({isPortrait}) => (isPortrait ? '100%' : '210px')};
`;

const InputTextField = styled(TextInput)`
  height: 55px;
  margin-top: ${({platform}) => (platform === 'ios' ? '50px' : '0px')};
`;

const InputTextIcon = styled(TextInput)`
  margin-top: 12px;
`;

export {InputContainer, InputTextField, InputTextIcon};
