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
  const {loading, type, manga, loadingSearch, offset} = useSelector(
    state => state.seriesReducer,
  );

  useEffect(() => {
    type === 'manga' && dispatch(actions.getData(type, false, offset));
  }, [type]);

  return (
    <>
      {loading ? (
        <ListLoader loading />
      ) : (
        <ScreenContainer
          animation="flipInY"
          isPortrait={orientation.isPortrait}>
          <View>
            <InputText isPortrait={orientation.isPortrait} />
            <Logo
              animation="pulse"
              iterationCount="infinite"
              source={require('../Assets/Images/manga.png')}
            />
            {loadingSearch && <ListLoader loadingSearch />}
          </View>
          {manga.length === 0 ? (
            <NotFound>
              <Text>No Manga was found... Try again.</Text>
            </NotFound>
          ) : (
            <ListImages dataList={manga} />
          )}
        </ScreenContainer>
      )}
    </>
  );
};
