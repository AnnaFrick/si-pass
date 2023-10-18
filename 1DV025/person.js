export class Person {

    constructor(name, age) {
        if (name !== '' && age !== '') {
        this.name = name
        this.age = age
        } else {
         throw new Error("Name and age must be defined")
        }
    }

    get getName() {
        return this.name
    }


}