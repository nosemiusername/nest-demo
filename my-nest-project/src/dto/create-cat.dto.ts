export class CreateCatDto {
    readonly id?: string
    readonly name: string;
    readonly age: number;
    readonly breed: string;

    constructor(id: string, name: string, age: number, breed: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
}