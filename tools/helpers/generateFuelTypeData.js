const generateFuelTypeData = async () => {
    const uuidv4 = require('uuid/v4');

    const fuelTypes = [
        'Gasoline',
        'Diesel',
        'Ethanol',
        'Electric',
        'Hydrogen',
        'LPG',
        'CNG',
        'Electric/Gasoline',
        'Others',
        'Electric/Diesel'
    ];

    const fuelTypesObjArray = [];

    fuelTypes.forEach(type => {
        const fuelTypeObj = {
            id: uuidv4(),
            type
        };

        fuelTypesObjArray.push(fuelTypeObj);
    });

    return fuelTypesObjArray;
};

module.exports = generateFuelTypeData;
