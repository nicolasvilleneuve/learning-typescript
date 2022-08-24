
// CAN DECLARE FIELDS IN CLASSES IN EITHER OF TWO WAYS ///

// FIRST : //

class Vehicle {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    protected honk(): void {
        console.log('honk honk');
    }
}

const car = new Vehicle('orange');
console.log(car.color);

// SECOND POSSIBLE WAY //

class Dog {
    constructor(public color: string, public breed: string[]) {

    }
}

const laszlo = new Dog('orange', ['hello', 'there']);
console.log(laszlo.color);
console.log(laszlo.breed);

// class Car extends Vehicle {
//     private drive(): void {
//         console.log('vroom');
//     }
//     public startDrivingProcess(): void {
//         this.drive();
//         this.honk();
//     }
// }
//
//
// const toyota = new Car();
// toyota.startDrivingProcess();
// console.log(toyota.make);


// const toyota = new Vehicle();
// toyota.honk();
//
// interface isGup {
//     _age: number;
//     _color: string;
//     _breed: string[];
// }
//
// class isGup {
//     constructor(age: number, color: string, breed: string[]) {
//         this._age = age;
//         this._color = color;
//         this._breed = breed;
//     }
//     get getAge() {
//         return this._age;
//     }
//     get getColor() {
//         return this._color;
//     }
//     get getBreed(){
//         return this._breed;
//     }
// }
//
// const laszlo = new isGup(2, 'black/brindle/white', ['chihuahua', 'pomeranian', 'miniature pinscher', 'pekingese']);
// console.log(laszlo.getAge);
// console.log(laszlo.getBreed.slice(0,4));
// let text = "Hello world, welcome to the universe.";
// let result = text.lastIndexOf("welcome");
// console.log(result)
// const cindy = new isGup(1, "fawn", ['pitty-lou', "poodle", "german shepherd", "yorkie"]);
// console.log(cindy.getBreed[0].slice(5,8));
//
