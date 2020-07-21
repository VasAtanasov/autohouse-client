import http from '../../utils/requester';

export const loadTopOffers = async () => {
  return http.get('/vehicles/offers/top');
};

export const searchOffers = async (
  filter,
  sort = 'createdAt,desc',
  pageNumber = 0
) => {
  return http.post(`/vehicles/offers/search?page=${pageNumber}&sort=${sort}`, {
    data: filter,
    headers: {
      'Content-Type': 'application/bg.autohouse.api-v1+json',
    },
  });
};

export const createOffer = async (data) => {
  console.log(data);
  const formData = new FormData();
  formData.append('price', data.price);
  formData.append('description', data.description);
  formData.append('contactDetailsPhoneNumber', data.contactDetailsPhoneNumber);
  formData.append('contactDetailsWebLink', data.contactDetailsWebLink);
  formData.append('addressLocationPostalCode', data.zipCode);
  formData.append('mainPhoto', data.images[0].name);
  formData.append('vehicle.year', data.year);
  formData.append('vehicle.bodyStyle', data.bodyStyle);
  formData.append('vehicle.fuelType', data.fuelType);
  formData.append('vehicle.transmission', data.transmission);
  formData.append('vehicle.state', data.state);
  formData.append('vehicle.drive', data.drive);
  formData.append('vehicle.color', data.color);
  formData.append('vehicle.hasAccident', data.hasAccident);
  formData.append('vehicle.doors', data.doors);
  formData.append('vehicle.mileage', data.mileage);
  formData.append('vehicle.year', data.year);
  formData.append('vehicle.makerName', data.makerName);
  formData.append('vehicle.modelName', data.modelName);
  formData.append('vehicle.trim', data.trim);
  data.features.forEach((feature) =>
    formData.append('vehicle.features', feature)
  );
  [...data.images].forEach((image) => formData.append('images', image));

  return http.post('/vehicles/offers', {
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const loadOfferDetails = async (offerId) => {
  return http.get(`/vehicles/offers/details/${offerId}`);
};

export const addToFavorites = async (offerId) => {
  return http.get(`/vehicles/offers/add-to-favorites/${offerId}`);
};
