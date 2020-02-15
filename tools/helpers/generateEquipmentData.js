const generateEquipmentData = async () => {
    const equipments = require('./json/equipment').equipments;
    const equipmentsObjArray = [];

    equipments.forEach((eq, idx) => {
        const index = idx + 1;

        const equipmentObj = {
            id: index,
            name: eq.name
        };
        equipmentsObjArray.push(equipmentObj);
    });

    return equipmentsObjArray;
};

module.exports = generateEquipmentData;
