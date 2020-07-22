import http from '../../utils/requester';

const contentTypeV1 = {
  'Content-Type': 'application/bg.autohouse.api-v1+json',
};

export const saveFilter = async (filter) => {
  return http.post('/vehicles/offers/search/save', {
    data: filter,
    headers: {
      ...contentTypeV1,
    },
  });
};

export const listSavedSearches = async () => {
  return http.get('/vehicles/offers/search/list');
};

export const removeSavedSearch = async (filterId) => {
  return http.del(`/vehicles/offers/search/saved-search/${filterId}`);
};
