let apples: number = 6;
let speed: string = 'fast';
let hasName: boolean = false;
let nothing: null = null;
let undef: undefined = undefined;


// arrays n stuff //
let today: Date = new Date();
let colors: string[] = ['red', 'blue', 'green'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

// Classes //

interface Car {
    _make: string
}

class Car {
    constructor(make: string) {
        this._make = make;
    }
    get make() {
        return this._make;
    }
}
let car: Car = new Car('ford');
console.log(car.make);

// Object literal //
let point: { x: number; y: number } = {
    x: 20,
    y: 40
};

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// when to use annotations: //
    // 1) Function that returns the any type //

const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates)

let words = ['red', 'green', 'blue'];
let foundWord = false;
for ( let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
console.log(foundWord);

//variable whose type cannot be inferred //
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}




