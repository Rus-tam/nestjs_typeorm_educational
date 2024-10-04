import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Listing } from "./listing";

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: true })
    public: boolean;

    @OneToOne(() => Listing)
    @JoinColumn()
    listing: Listing;

    constructor(item: Partial<Item>) {
        Object.assign(this, item);
    }
}
