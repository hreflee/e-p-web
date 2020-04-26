import Router from "koa-router";
import {MethodDAO} from "../../models";
import {GetMethodResponse} from "../types/method";

const MethodRouter = new Router({prefix: '/method'});

MethodRouter.get('/', async (ctx) => {
    const methodList = await MethodDAO.findAll();
    ctx.body = <GetMethodResponse>{
        methods: methodList
    }
});

export {MethodRouter}