import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {TimestampEntities} from "../../generics/Timestamp.entities";

@Entity('article')
export class Article extends TimestampEntities {
@PrimaryGeneratedColumn()
    id:number
@Column()
    title:string
@Column()
    description:string



}
