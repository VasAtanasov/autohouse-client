const generateBodyStyleData = async () => {
    const uuidv4 = require('uuid/v4');

    const bodyStyles = [
        'SUV',
        'MPV',
        'CPO',
        'Hybrid',
        'Sedan',
        'Crossover',
        'Luxury',
        'Truck',
        'Pickup',
        'Hatchback',
        'Minivan',
        'Coupe',
        'Convertible',
        'Wagon',
        'Sport',
        'Van',
        'Other'
    ];

    const objArray = [];

    bodyStyles.forEach(body => {
        const obj = {
            id: uuidv4(),
            body
        };

        objArray.push(obj);
    });

    return objArray;
};

module.exports = generateBodyStyleData;
