const generateOfferShortData = async (makes, fuelTypes, towns) => {
    makes = makes || [];
    const vehiclesUUIDs = require('./json/uuid_for_vehicles');
    const createdONDatesArray = require('./json/created_on_dates');
    const utils = require('./utils');
    const transmissions = ['Automatic', 'Semi-automatic', 'Manual'];
    const offers = [];

    const baseImageUrl = '/images/offers/cars/201909-12';

    for (let i = 0; i < vehiclesUUIDs.length; i++) {
        const make = utils.getRandomValueFromArray(makes);
        const model = utils.getRandomValueFromArray(make.models);
        const fuelType = utils.getRandomValueFromArray(fuelTypes);
        const town = utils.getRandomValueFromArray(towns);
        const sqlDate = utils.getRandomValueFromArray(createdONDatesArray);

        const UUID = vehiclesUUIDs[i];
        const offerObj = {
            id: UUID,
            make: make.name,
            model: model.name,
            thumbnail: `${baseImageUrl}/${UUID}/thumbnail.jpg`,
            price: utils.getRandomInt(1, 500000),
            mileage: utils.getRandomInt(5000, 300000),
            year: utils.getRandomInt(1930, 2020),
            month: utils.getRandomInt(1, 13),
            transmission: utils.getRandomValueFromArray(transmissions),
            fuel_type: fuelType.type,
            location: town.name,
            created_on: sqlDate
        };

        offers.push(offerObj);
    }

    return offers;
};

module.exports = generateOfferShortData;
