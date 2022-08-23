const today = new Date();
today.getMonth();

const person = {
    age: 20,
    name: 'john'
}

interface Color {
    _age: number,
    _name: string
}

class Color {
    constructor(age: number, name: string) {
        this._age = age;
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}

const red = new Color(20, 'red');
console.log(red.name);
console.log(red.age);
