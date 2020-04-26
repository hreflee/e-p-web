import {DataItem} from "./data";
import {MethodItem} from "./method";

export type TrainStatus = 'TRAINING' | 'SUCCESS' | 'FAIL';

export interface GetTrainResponse {
    trains: TrainItem[]
}

export interface TrainItem {
    id: number;
    method: MethodItem;
    data: DataItem;
    selectedAttrs: string[];
    status: TrainStatus;
    MAPE: number | null;
    RMSE: number | null;
    submitAt: string;
    completeAt: string | null;
}