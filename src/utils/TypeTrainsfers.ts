import {DataDAO, MethodDAO, TrainRecordDAO} from "../apis/models";
import {DataItem} from "../apis/types/data";
import moment, {Moment} from "moment";
import {TrainItem} from "../apis/types/train";

export const TrainRecordDAO2TrainItem = (item:TrainRecordDAO):TrainItem => {
    const {id, method, data, status, MAPE, RMSE, submitAt, completeAt} = item;
    console.log(submitAt instanceof moment);
    return {
        id,
        method: MethodDAO2MethodItem(method),
        data: DataDAO2DataItem(data),
        status,
        MAPE,
        RMSE,
        submitAt: submitAt.format(),
        completeAt: completeAt ? completeAt.format():null
    }
};

export const MethodDAO2MethodItem = (item:MethodDAO) => ({
    id: item.id,
    name: item.name
});

export const DataDAO2DataItem = (item:DataDAO):DataItem => ({
    id: item.id,
    fileName: item.fileName,
    recordNum: item.recordNum,
    uploadAt: item.uploadAt.format()
});