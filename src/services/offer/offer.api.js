import http from '../../utils/requester';

export const loadTopOffers = async () => {
  return await http.get('/vehicles/offers/top');
};

export const searchOffers = async (filter) => {
  return await http.post('/vehicles/offers/search', {
    data: filter,
    headers: {
      'Content-Type': 'application/bg.autohouse.api-v1+json',
    },
  });
};
