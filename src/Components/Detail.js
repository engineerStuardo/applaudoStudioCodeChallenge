import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';

import {ListLoader} from './ListLoader';
import {getDataById} from '../Services/Services';
import {TopCoverImage} from './CoverImage';
import {DetailContainer} from './DetailContainer';
import {useOrientation} from '../CustomHooks/useOrientation';
import {BackgroundImage} from '../Styles/DetailStyles';
import {GoBackIcon} from './GoBackIcon';

export const Detail = ({route, navigation}) => {
  const {id, type} = route.params;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [moreSynopsis, setMoreSynopsis] = useState(false);
  const orientation = useOrientation();

  const getDetail = async () => {
    try {
      setLoading(true);
      const data = await getDataById(type, id);
      setData(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <ScrollView>
      {loading && <ListLoader loading />}
      {data && (
        <BackgroundImage
          source={{
            uri: orientation.isPortrait
              ? 'white'
              : data.attributes.posterImage.original,
          }}>
          {orientation.isPortrait && (
            <TopCoverImage dataInfo={data} navigation={navigation} />
          )}
          <GoBackIcon navigation={navigation} />
          <View style={{alignItems: 'center'}}>
            <DetailContainer
              dataInfo={data}
              moreSynopsis={moreSynopsis}
              setMoreSynopsis={setMoreSynopsis}
            />
          </View>
        </BackgroundImage>
      )}
    </ScrollView>
  );
};
