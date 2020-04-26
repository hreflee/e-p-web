import {Table, Column, Model, HasMany, Unique} from 'sequelize-typescript'
import TrainRecordDAO from "./TrainRecordDAO";

@Table
export default class MethodDAO extends Model<MethodDAO>{
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @Column({unique: true})
    name: string;

    @Column
    define: string;

    @HasMany(() => TrainRecordDAO)
    trains: TrainRecordDAO[];
}