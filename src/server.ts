import Koa from 'koa';
import bodyParser from "koa-body";
import json from "koa-json";
import moment from "moment";
import cors from "koa2-cors";
import * as path from "path";
import {DataRouter} from "./apis/controllers/data";
import {MethodRouter} from "./apis/controllers/method";
import {TrainRouter} from "./apis/controllers/train";
import {fetchMethods} from "./services/ModelService";

const app:Koa = new Koa();

moment.defaultFormat='YYYY.MM.DD HH:mm';

// middlewares
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    // @ts-ignore
    const ms = new Date() as number - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});
app.use(cors({
    origin: ctx => {
        return ctx.request.header.origin
    }
}));
app.use(bodyParser({
    multipart: true,
    formidable:{
        uploadDir:path.join(__dirname,'../upload/'), // 设置文件上传目录
        keepExtensions: true,
    }
}));
app.use(json());

app.use(DataRouter.routes());

app.use(MethodRouter.routes());

app.use(TrainRouter.routes());

app.listen(3000);

fetchMethods();

console.log("Server running on http://localhost:8080");