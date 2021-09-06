import axios from 'axios';

const apiURL = 'https://kitsu.io/api/edge';

const headers = {
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

export const getFullDataAnime = async offset => {
  const resp = await axios.get(
    `${apiURL}/anime?page[limit]=10&page[offset]=${offset}`,
    headers,
  );
  return resp.data.data;
};

export const getDataByIdAnime = async id => {
  const resp = await axios.get(`${apiURL}/anime/${id}`, headers);
  return resp.data.data;
};

export const getSearchAnime = async (text, offset) => {
  const resp = await axios.get(
    `${apiURL}/anime?filter[text]=${text}&page[offset]=${offset}`,
    headers,
  );
  return resp.data.data;
};

export const getFullDataManga = async offset => {
  const resp = await axios.get(
    `${apiURL}/manga?page[limit]=10&page[offset]=${offset}`,
    headers,
  );
  return resp.data.data;
};

export const getDataByIdManga = async id => {
  const resp = await axios.get(`${apiURL}/manga/${id}`, headers);
  return resp.data.data;
};

export const getSearchManga = async (text, offset) => {
  const resp = await axios.get(
    `${apiURL}/manga?filter[text]=${text}&page[offset]=${offset}`,
    headers,
  );
  return resp.data.data;
};
