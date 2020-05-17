import http from '../../utils/requester';

export const loadMakers = async () => {
  return await http.get('/vehicles/makers');
};

export const loadStatistic = async () => {
  return await http.get('/vehicles/offers/statistics');
};

export const loadAppState = async () => {
  return await http.get('/state');
};
