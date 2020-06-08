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

export const loadProvinces = async () => {
  return http.get('/province/list');
};

export const loadProvince = async (id) => {
  return http.get(`/province/${id}`);
};

export const loadTrims = async (makerName, modelName) => {
  return http.get(`/vehicles/makers/${makerName}/${modelName}`);
};
