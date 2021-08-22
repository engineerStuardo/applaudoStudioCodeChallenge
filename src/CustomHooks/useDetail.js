import {useState, useEffect} from 'react';

import {getDataById} from '../Services/Services';

export const useDetail = (type, id) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

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
  }, []);

  return {
    data,
    loading,
  };
};
