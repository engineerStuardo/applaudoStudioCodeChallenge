import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';

import {ListLoader} from './ListLoader';
import {getDataById} from '../Services/Services';
import {TopCoverImage} from './CoverImage';
import {DetailContainer} from './DetailContainer';

export const Detail = ({route, navigation}) => {
  const {id, isFavorite, type} = route.params;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [moreSynopsis, setMoreSynopsis] = useState(false);

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
        <>
          <TopCoverImage dataInfo={data} navigation={navigation} />
          <DetailContainer
            dataInfo={data}
            moreSynopsis={moreSynopsis}
            setMoreSynopsis={setMoreSynopsis}
          />
        </>
      )}
    </ScrollView>
  );
};
