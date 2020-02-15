async function generateColorSqlInsert() {
    const colors = [
        'Black',
        'Gray',
        'Cream',
        'Light Brown',
        'Dark Brown',
        'Dark Red',
        'Red',
        'Dark Blue',
        'Light Blue',
        'White',
        'Orange',
        'Silver',
        'Gold'
    ];

    const colorsObj = [];

    for (let i = 0; i < colors.length; i++) {
        const engineObj = {
            id: i + 1,
            name: colors[i]
        };

        colorsObj.push(engineObj);
    }

    return colorsObj;
}

module.exports = generateColorSqlInsert;
