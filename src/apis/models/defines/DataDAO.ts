import {Table, Column, Model, DataType, CreatedAt, HasMany} from 'sequelize-typescript'
import moment, {Moment} from "moment";
import TrainRecordDAO from "./TrainRecordDAO";

@Table
export default class DataDAO extends Model<DataDAO>{
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @Column
    fileName: string;

    @Column
    path: string;

    @Column
    recordNum: number;

    @CreatedAt
    @Column(DataType.DATE)
    get uploadAt(): Moment {
        return moment(this.getDataValue('uploadAt'))
    }

    @HasMany(() => TrainRecordDAO)
    trains: TrainRecordDAO[]
}