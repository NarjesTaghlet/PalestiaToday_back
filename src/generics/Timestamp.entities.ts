import { CreateDateColumn } from 'typeorm';

export class TimestampEntities {
    @CreateDateColumn({
        update: false,
    })
    createdAt: Date;
    @CreateDateColumn()
    updatedAt: Date;
    @CreateDateColumn()
    deletedAt: Date;
}