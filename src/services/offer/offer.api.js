import http from '../../utils/requester';

export const loadTopOffers = async () => {
  return await http.get('/vehicles/offers/top');
};

export const searchOffers = async (
  filter,
  sort = 'createdAt,desc',
  pageNumber = 0
) => {
  return await http.post(
    `/vehicles/offers/search?page=${pageNumber}&sort=${sort}`,
    {
      data: filter,
      headers: {
        'Content-Type': 'application/bg.autohouse.api-v1+json',
      },
    }
  );
};
