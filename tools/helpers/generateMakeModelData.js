const generateMakeModelData = async () => {
    const cmm = require('./json/cmm');

    const cmmArray = [];

    let modelId = 0;
    let makeId = 0;

    cmm.forEach((row, rowIndex, matrix) => {
        const make = row[0];
        const makeObj = {
            id: ++makeId,
            name: make,
            models: []
        };

        row.slice(2).forEach((model, index) => {
            const modelObj = {
                id: ++modelId,
                name: model
            };

            makeObj.models.push(modelObj);
        });

        cmmArray.push(makeObj);
    });

    return cmmArray;
};

module.exports = generateMakeModelData;
