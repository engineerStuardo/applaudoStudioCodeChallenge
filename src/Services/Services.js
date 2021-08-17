import axios from 'axios';

const apiURL = 'https://kitsu.io/api/edge';

const headers = {
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

export const getAnimeData = async offset => {
  const resp = await axios.get(
    `${apiURL}/anime?page[limit]=10&page[offset]=${offset}`,
    headers,
  );
  return resp.data.data;
};
