import http from '../../utils/requester';

export const loadTopOffers = async () => {
  return await http.get('/vehicles/offers/top');
};
