import {useState, useEffect} from 'react';

import {getFullData, getSearch} from '../Services/Services';

export const useApi = typeCategory => {
  const [dataByCategory, setDataByCategory] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(typeCategory);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [searchText, setSearchText] = useState();

  const apiRequest = async start => {
    try {
      setLoading(true);
      if (start) {
        const data = await getFullData(type, 0);
        setDataByCategory(data);
        setOffset(10);
      } else {
        const data = await getFullData(type, offset);
        setDataByCategory([...dataByCategory, ...data]);
        setOffset(offset + 10);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const searchCategoryByText = async text => {
    try {
      setLoadingSearch(true);
      const data = await getSearch(type, text);
      setDataByCategory(data);
    } catch (error) {
      console.log(error);
      setLoadingSearch(false);
    } finally {
      setLoadingSearch(false);
    }
  };

  const getMoreDataBySearch = async () => {
    try {
      setLoading(true);
      const data = await getSearch(type, searchText, offset);
      setDataByCategory([...dataByCategory, ...data]);
      setOffset(offset + 10);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    apiRequest();
  }, []);

  return {
    dataByCategory,
    offset,
    loading,
    setDataByCategory,
    setOffset,
    setLoading,
    searchCategoryByText,
    getMoreDataBySearch,
    loadingSearch,
    searchText,
    setSearchText,
    apiRequest,
  };
};
