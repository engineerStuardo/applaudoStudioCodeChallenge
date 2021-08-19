import axios from 'axios';

const apiURL = 'https://kitsu.io/api/edge';

const headers = {
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

export const getFullData = async (type, offset) => {
  const resp = await axios.get(
    `${apiURL}/${type}?page[limit]=10&page[offset]=${offset}`,
    headers,
  );
  return resp.data.data;
};

export const getDataById = async (type, id) => {
  const resp = await axios.get(`${apiURL}/${type}/${id}`, headers);
  return resp.data.data;
};

export const getSearch = async (type, text, offset) => {
  const resp = await axios.get(
    `${apiURL}/${type}?filter[text]=${text}&page[offset]=${offset}`,
    headers,
  );
  return resp.data.data;
};
