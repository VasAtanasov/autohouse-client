import http from '../../utils/requester';

export const loadMakers = async () => {
  return http.get('/vehicles/makers');
};

export const loadStatistic = async () => {
  return http.get('/vehicles/offers/statistics');
};

export const loadAppState = async () => {
  return http.get('/state');
};
