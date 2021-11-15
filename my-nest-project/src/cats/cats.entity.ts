import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cats')
export class CatEntity {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ unique: true })
    readonly name: string;
    @Column()
    readonly breed: string;
    @Column()
    readonly age: number;

    constructor(id: string, name: string, age: number, breed: string) {
        this.id = id;
        this.name = name
        this.age = age;
        this.breed = breed;
        console.log('Creo User Entity para ' + this.name);
    }

}