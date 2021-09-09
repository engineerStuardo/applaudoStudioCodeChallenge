import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {ListLoader} from '../Components/ListLoader';
import {InputText} from '../Components/InputText';
import {ListImages} from '../Components/ListImages';
import {ScreenContainer, Logo, NotFound} from '../Styles/ScreenStyles';
import {useOrientation} from '../CustomHooks/useOrientation';
import * as actions from '../Redux/Actions/seriesActions';

export const Manga = () => {
  const orientation = useOrientation();
  const dispatch = useDispatch();
  const {loadingManga, manga} = useSelector(state => state.seriesReducer);

  useEffect(() => {
    dispatch(actions.getDataManga(false, 0));
  }, []);

  return (
    <>
      <ScreenContainer animation="flipInY" isPortrait={orientation.isPortrait}>
        <View>
          <InputText isPortrait={orientation.isPortrait} />
          <Logo
            animation="pulse"
            iterationCount="infinite"
            source={require('../Assets/Images/manga.png')}
          />
        </View>
        {loadingManga ? (
          <ListLoader loading={loadingManga} />
        ) : manga.length > 0 ? (
          <ListImages dataList={manga} />
        ) : (
          <NotFound>
            <Text>No manga was found... try again</Text>
          </NotFound>
        )}
      </ScreenContainer>
    </>
  );
};
