import {Sequelize} from 'sequelize-typescript';
import {secretConfig} from '../config/secret-config';
import DataDAO from "./defines/DataDAO";
import MethodDAO from "./defines/MethodDAO";
import TrainRecordDAO from "./defines/TrainRecordDAO";

const dbConfig = secretConfig.database;
export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: dbConfig.host,
    database: dbConfig.dbName,
    username: dbConfig.username,
    password: dbConfig.password,
    define: {
        timestamps: false
    },
    models: [__dirname + '/defines'],
    timezone: '+08:00'
});

(async () => {
    await sequelize.sync({force: true});
    // const data = await DataDAO.create({
    //     fileName: 'a',
    //     path: 'bbbbb'
    // });
    // const method = await MethodDAO.create(<MethodDAO>{
    //     name: 'RL'
    // });
    // await TrainRecordDAO.create({
    //     dataId: data.id,
    //     methodId: method.id,
    //     selectedAttrs: ['a', 'b'],
    // });
    // setTimeout(() => {
    //     TrainRecordDAO.create({
    //         dataId: data.id,
    //         methodId: method.id,
    //         selectedAttrs: ['a', 'b', 'c'],
    //     });
    // }, 2000);
    // const a:TrainRecordDAO[] = await TrainRecordDAO.findAll({
    //     include: [DataDAO]
    // });
    // console.log(a[0])
//     await sequelize.query(`INSERT INTO \`e-p-web\`.\`trainrecorddaos\` (\`methodId\`, \`dataId\`, \`logDir\`, \`status\`, \`selectedAttrs\`, \`MAPE\`, \`RMSE\`, \`completeAt\`, \`submitAt\`, \`updatedAt\`) VALUES ('1', '1', NULL, 'TRAINING', '[\\"a\\",\\"b\\"]', NULL, NULL, NULL, '2020-04-15 09:58:58', '2020-04-15 09:58:58');
// INSERT INTO \`e-p-web\`.\`trainrecorddaos\` (\`methodId\`, \`dataId\`, \`logDir\`, \`status\`, \`selectedAttrs\`, \`MAPE\`, \`RMSE\`, \`completeAt\`, \`submitAt\`, \`updatedAt\`) VALUES ('1', '1', NULL, 'SUCCESS', '[\\"a\\",\\"b\\",\\"c\\"]', '0.8', '0.9', '2020-04-15 10:07:15', '2020-04-15 09:59:00', '2020-04-15 09:59:00');
// INSERT INTO \`e-p-web\`.\`trainrecorddaos\` (\`methodId\`, \`dataId\`, \`logDir\`, \`status\`, \`selectedAttrs\`, \`MAPE\`, \`RMSE\`, \`completeAt\`, \`submitAt\`, \`updatedAt\`) VALUES ('1', '1', NULL, 'SUCCESS', '[\\"a\\",\\"b\\",\\"c\\"]', '0.8', '0.9', '2020-04-15 10:13:59', '2020-04-15 09:59:00', '2020-04-15 09:59:00');
// `, {raw: true});
})();

export {DataDAO, MethodDAO, TrainRecordDAO}