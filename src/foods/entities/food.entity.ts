import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('foods')
export class Food {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name!: string;
    @Column()
    description!: string;
    @Column()
    price!: number;
    @Column()
    image!: string;
    @Column()
    category!: string;
    @Column({ default: true })
    isAvailable!: boolean;
}
