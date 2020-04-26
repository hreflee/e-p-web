import Router from "koa-router";
import parseCSV from 'csv-parse';
import fs from 'fs';

import {
    DataItem,
    GetDataResponse,
    PostDataRequest,
    PostDataResponse
} from "../types/data";
import {DataDAO, TrainRecordDAO} from "../models";
import {DataDAO2DataItem} from "../../utils/TypeTrainsfers";

const promisedParseCSV = (path: string) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (readFileErr, data) => {
            if (readFileErr) {
                reject(readFileErr);
            } else {
                parseCSV(data, (parseErr, records, info) => {
                    if (parseErr) {
                        reject(parseErr);
                    } else {
                        resolve(records);
                    }
                })
            }
        })
    })
};

const DataRouter = new Router({prefix: '/data'});

DataRouter.get('/', async (ctx) => {
    const dataList:DataDAO[] = await DataDAO.findAll();
    const dataItems:DataItem[] = dataList.map(DataDAO2DataItem);
    ctx.body = <GetDataResponse>{
        dataItems
    }
});

DataRouter.post('/', async (ctx) => {
    try {
        const {path: filePath, name: fileName} = ctx.request.files.file;
        const csvContent = (await promisedParseCSV(filePath)) as Array<string[]>;
        if (csvContent.length === 0) {
            throw new Error('empty file');
        }
        const dataDAO = await DataDAO.create(<DataDAO>{
            fileName,
            path: filePath,
            recordNum: csvContent.length - 1,
        });
        ctx.body = <PostDataResponse>{
            success: true,
            dataItem: DataDAO2DataItem(dataDAO)
        };
    } catch (e) {
        ctx.body = <PostDataResponse>{
            success: false,
            information: e.toString(),
            dataItem: null
        };
        console.error(e);
    }
});

export {DataRouter};