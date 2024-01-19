
import {Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ReactionType} from "../../enums/reaction-type";
import {User} from "../../user/entities/user.entity"
import {Article} from "../../article/entities/article.entity";
import {TimestampEntities} from "../../generics/Timestamp.entities";


@Entity('interactionarticle')
export class Interactionarticle extends TimestampEntities{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    commentaire: string;

    @Column({
        type: 'enum',
        enum: ReactionType,
        default: ReactionType.LIKE,
    })
    reaction: ReactionType;


    //Relation avec l'article

    @ManyToOne(() => Article, article => article.interactions, { eager: true })
    @JoinColumn({ name: 'article_id' })
    article: Article;


    //Relation avec user
    @ManyToOne(
        type => User,
        (user) => user.interactions,
        {
            cascade: ['insert', 'update'],
            nullable: true,
            eager: true
        }
    )
    user: User;

}
