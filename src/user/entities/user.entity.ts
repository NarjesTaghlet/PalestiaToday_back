import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"
import {TimestampEntities} from "../../generics/Timestamp.entities";
import {Role_userEnum} from "../../enums/role_user.enum";

@Entity('user')
export class User extends  TimestampEntities{
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    username : string
    @Column({
        unique:true
    })
    email : string
    @Column({
        unique:true
    })
    password : string

    @Column()
    salt:string

    @Column(
        {
            type : "enum",
            enum : Role_userEnum,
            //par défaut l 'utilisateur est un visiteur
            //l'abonnée peut faire des interactions (like , comment , .... )
            default :Role_userEnum.VISITEUR,
        }
    )
    role : string




}



