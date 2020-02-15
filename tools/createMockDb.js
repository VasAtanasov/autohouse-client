/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const generateMakeModelData = require('./helpers/generateMakeModelData');
const generateEquipmentData = require('./helpers/generateEquipmentData');
const generateTownData = require('./helpers/generateTownData');
const generateColorData = require('./helpers/generateColorData');
const generateRoleData = require('./helpers/generateRoleData');
const generateUserData = require('./helpers/generateUserData');
const generateFuelTypeData = require('./helpers/generateFuelTypeData');
const generateBodyStyleData = require('./helpers/generateBodyStyleData');
const generateWheelDriveData = require('./helpers/generateWheelDriveData');
const generateFuelStandardData = require('./helpers/generateFuelStandardData');

(async () => {
    const users = await generateUserData();

    const makes = await generateMakeModelData();
    const equipment = await generateEquipmentData();
    const towns = await generateTownData();
    const colors = await generateColorData();
    const roles = await generateRoleData();
    const fuelTypes = await generateFuelTypeData();
    const bodyStyles = await generateBodyStyleData();
    const wheelDrives = await generateWheelDriveData();
    const fuelStandards = await generateFuelStandardData();

    const data = JSON.stringify({
        makes,
        equipment,
        towns,
        colors,
        roles,
        fuelTypes,
        bodyStyles,
        wheelDrives,
        fuelStandards
    });

    const filepath = path.join(__dirname, 'db.json');

    fs.writeFile(filepath, data, function(err) {
        err ? console.log(err) : console.log('Mock DB created.');
    });
})();
