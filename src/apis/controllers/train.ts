import Router from "koa-router";
import {DataDAO, MethodDAO, TrainRecordDAO} from "../models";
import {GetTrainResponse} from "../types/train";
import {TrainRecordDAO2TrainItem} from "../../utils/TypeTrainsfers";

const TrainRouter = new Router({prefix: '/train'});

TrainRouter.get('/', async (ctx) => {
    const trainList = await TrainRecordDAO.findAll({include: [DataDAO, MethodDAO]});
    ctx.body = <GetTrainResponse>{
        trains: trainList.map(TrainRecordDAO2TrainItem)
    }
});

TrainRouter.post('/', async (ctx) => {

});

export {TrainRouter}