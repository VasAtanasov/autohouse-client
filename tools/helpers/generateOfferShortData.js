const generateOfferShortData = async makes => {
    makes = makes || [];
    const vehiclesUUIDs = require('./json/uuid_for_vehicles');
    const utils = require('./utils');
    const offers = [];

    const baseImageUrl = '/images/offers/cars/201909-12';

    for (let i = 0; i < vehiclesUUIDs.length; i++) {
        const make = utils.getRandomValueFromArray(makes);
        const model = utils.getRandomValueFromArray(make.models);

        const UUID = vehiclesUUIDs[i];
        const offerObj = {
            id: UUID,
            make: make.name,
            model: model.name,
            thumbnail: `${baseImageUrl}/${UUID}/thumbnail.jpg`,
            price: utils.getRandomInt(1, 500000),
            mileage: utils.getRandomInt(5000, 300000)
        };

        offers.push(offerObj);
    }

    return offers;
};

module.exports = generateOfferShortData;
