import {useState, useEffect} from 'react';

import {getFullData, getSearch} from '../Services/Services';

export const useApi = typeCategory => {
  const [animes, setAnimes] = useState([]);
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
        setAnimes(data);
        setOffset(10);
      } else {
        const data = await getFullData(type, offset);
        setAnimes([...animes, ...data]);
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
      setAnimes(data);
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
      setAnimes([...animes, ...data]);
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
    animes,
    offset,
    loading,
    setAnimes,
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
