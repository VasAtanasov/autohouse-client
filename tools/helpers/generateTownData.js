const generateTownData = async () => {
    const towns = require('./json/bg_cities').data;
    const townsObjArray = [];

    towns.forEach((town, idx) => {
        const { asciiname, location } = town;
        const index = idx + 1;

        const townObj = {
            id: index,
            name: asciiname,
            location
        };
        townsObjArray.push(townObj);
    });

    return townsObjArray;
};

module.exports = generateTownData;
