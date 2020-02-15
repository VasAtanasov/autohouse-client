const generateFuelStandardData = async () => {
    const uuidv4 = require('uuid/v4');

    const fuelStandards = [
        'Euro 1',
        'Euro 2',
        'Euro 3',
        'Euro 4',
        'Euro 5',
        'Euro 6'
    ];

    const objArray = [];

    fuelStandards.forEach(drive => {
        const obj = {
            id: uuidv4(),
            drive
        };

        objArray.push(obj);
    });

    return objArray;
};

module.exports = generateFuelStandardData;
