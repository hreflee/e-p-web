import {Table, Column, Model, HasMany} from 'sequelize-typescript'
import TrainRecordDAO from "./TrainRecordDAO";

@Table
export default class MethodDAO extends Model<MethodDAO>{
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @Column
    name: string;

    @HasMany(() => TrainRecordDAO)
    trains: TrainRecordDAO[]

    //TODO: other attrs
}