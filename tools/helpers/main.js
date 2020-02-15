const equipments = require('./equipment.json.js').equipments;
const cmm = require('./cmm');
const towns = require('./bg_cities').data;
const dbConnection = require('./dbConnection');
const makeModelsAutoList = require('./make_models_autolist');
const autoscout = require('./autoscout-obj');
const cardatabase = require('./cardatabase');

const mapName = function(str) {
    return str.replace(/\s+/g, '_').toLowerCase();
};

const writeToFile = function(fileName, content) {
    require('fs').writeFile(fileName, content, function(err) {
        if (err) {
            console.error('Crap happens');
        }
    });
};

const appendRowToFile = function(fileName, row) {
    require('fs').appendFile(fileName, row, function(err) {
        if (err) {
            console.error('Crap happens');
        }
    });
};

const carMakeModelObj = (function(cmm) {
    const cmmArray = [];
    const cmmSQL = [];

    let modelId = 0;
    let makeId = 0;

    cmm.forEach((row, rowIndex, matrix) => {
        const make = row[0];

        const makeObj = {};
        makeObj['id'] = ++makeId;
        makeObj['name'] = mapName(make);
        makeObj['pretty_name'] = make;
        makeObj['models'] = [];

        const insertRow = `insert into makers (id, name, pretty_name) values (${makeObj.id}, '${makeObj.name}', '${makeObj.pretty_name}');`;
        cmmSQL.push(insertRow);

        row.slice(2).forEach((model, index) => {
            const modelObj = {};
            modelObj['id'] = ++modelId;
            modelObj['name'] = mapName(model);
            modelObj['pretty_name'] = model;
            makeObj.models.push(modelObj);

            const insertRow = `insert into models (id, name, pretty_name, maker_id) values (${modelObj.id}, '${modelObj.name}','${modelObj.pretty_name}', ${makeObj.id});`;
            cmmSQL.push(insertRow);
        });

        cmmArray.push(makeObj);
    });

    return {
        cmmArray,
        cmmSQL
    };
})(cmm);

const equipmentObj = (function(equipmentsArray) {
    const equipmentsObjArray = [];
    const equipmentSQL = [];

    equipmentsArray.forEach((eq, idx) => {
        const index = idx + 1;

        const equipmentObj = {};

        equipmentObj['id'] = index;
        equipmentObj['name'] = eq.name;
        equipmentsObjArray.push(equipmentObj);

        const insertRow = `insert into features (id, name) values (${index}, '${eq.name}');`;
        equipmentSQL.push(insertRow);
    });

    return {
        equipmentsObjArray,
        equipmentSQL
    };
})(equipments);

const townsObj = (function(townsArray) {
    const townsObjArray = [];
    const townsSQL = [];

    townsArray.forEach((town, idx) => {
        const index = idx + 1;

        const townObj = {};

        townObj['id'] = index;
        townObj['name'] = town.asciiname;
        townsObjArray.push(townObj);

        const insertRow = `insert into locations (id, name) values (${index}, '${town.asciiname}');`;
        townsSQL.push(insertRow);
    });

    return {
        townsObjArray,
        townsSQL
    };
})(towns);

const entitiesObj = {};
entitiesObj['cmmArray'] = carMakeModelObj.cmmArray;
entitiesObj['equipments'] = equipmentObj.equipmentsObjArray;
entitiesObj['locations'] = townsObj.townsObjArray;

async function executeQuery(query) {
    let con = await dbConnection();
    try {
        await con.query('START TRANSACTION');
        await con.query(query);
        await con.query('COMMIT');
        console.log(query);
    } catch (ex) {
        await con.query('ROLLBACK');
        console.log(ex);
        throw ex;
    } finally {
        await con.release();
        await con.destroy();
    }
}

(async function main() {
    const generateColorInsert = require('./generateColorData');
    const generateRoleInsert = require('./generateRoleData');
    const colorSql = await generateColorInsert();
    const rolesSql = await generateRoleInsert();

    let entitiesArray = [
        carMakeModelObj.cmmSQL,
        equipmentObj.equipmentSQL,
        townsObj.townsSQL,
        colorSql,
        rolesSql
    ];

    const insert = entitiesArray.reduce((a, b) => {
        return a.concat(b);
    }, []);

    await executeQuery(insert.join('\n'));

    const generateVehiclesInsert = require('./generateVehicleData');
    const generateVehiclesFeaturesSqlInserts = require('./generateVehicleFeaturesData');
    const generateEngineSqlInsert = require('./generateEngineData');
    const generateOfferSqlInsert = require('./generateOfferData');
    const generateUserSqlInsert = require('./generateUserData');
    const generateImageSqlInset = require('./generateImageData');
    const generateUserRoleSqlInset = require('./generateUserRoleData');

    const vehiclesInsertSql = await generateVehiclesInsert();
    const vehiclesFeaturesSql = await generateVehiclesFeaturesSqlInserts();
    const enginesSql = await generateEngineSqlInsert();
    const usersSql = await generateUserSqlInsert();
    const offerSql = await generateOfferSqlInsert();
    const imageSql = await generateImageSqlInset();
    const userRoleSql = await generateUserRoleSqlInset();

    const sql = [
        usersSql,
        offerSql,
        vehiclesInsertSql,
        vehiclesFeaturesSql,
        enginesSql,
        imageSql,
        userRoleSql
    ];

    const dependentInserts = sql.reduce((a, b) => {
        return a.concat(b);
    }, []);

    writeToFile('./data.sql', '');
    appendRowToFile('./data.sql', insert.join('\n'));

    writeToFile('./data-next.sql', '');
    appendRowToFile('./data-next.sql', dependentInserts.join('\n'));

    await executeQuery(dependentInserts.join('\n'));
})();
