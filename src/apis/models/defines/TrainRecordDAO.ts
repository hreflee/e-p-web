import {Table, Column, Model, DataType, UpdatedAt, CreatedAt, BelongsTo, ForeignKey} from 'sequelize-typescript'
import DataDAO from "./DataDAO";
import MethodDAO from "./MethodDAO";
import moment, {Moment} from "moment";
import {WhereAttributeHash} from "sequelize";
import {TrainStatus} from "../../types/train";


@Table
export default class TrainRecordDAO extends Model<TrainRecordDAO>{
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @ForeignKey(() => MethodDAO)
    @Column
    methodId: number;

    @BelongsTo(() => MethodDAO)
    method: MethodDAO;

    @ForeignKey(() => DataDAO)
    @Column
    dataId: number;

    @BelongsTo(() => DataDAO)
    data: DataDAO;

    /**
     * @description In log directory, at least a '_SUCCESS' or '_FAIL' file should be contained. '_FAIL' file should contains all stderr of training program. For Tensorboard visualization, more extra file should be contains in log directory.
     */
    @Column
    logDir: string;

    @Column({
        type: DataType.ENUM('TRAINING', 'SUCCESS', 'FAIL'),
        defaultValue: 'TRAINING'
    })
    status: TrainStatus;

    @Column(DataType.FLOAT)
    MAPE: number;

    @Column(DataType.FLOAT)
    RMSE: number;

    @CreatedAt
    @Column(DataType.DATE)
    // @ts-ignore
    get submitAt(): Moment {
        return moment(this.getDataValue('submitAt'));
    }

    @Column(DataType.DATE)
    // @ts-ignore
    get completeAt(): Moment {
        return moment(this.getDataValue('completeAt'));
    }
    // @ts-ignore
    set completeAt(date:Date): void {
        // @ts-ignore
        this.setDataValue('completeAt', date);
    }
}