const generateWheelDriveData = async () => {
    const uuidv4 = require('uuid/v4');

    const wheelDrives = [
        'Front Wheel Drive',
        'Rear Wheel Drive',
        'Four Wheel Drive',
        'All Wheel Drive'
    ];

    const objArray = [];

    wheelDrives.forEach(drive => {
        const obj = {
            id: uuidv4(),
            drive
        };

        objArray.push(obj);
    });

    return objArray;
};

module.exports = generateWheelDriveData;
