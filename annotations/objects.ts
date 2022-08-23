const profile = {
    name: 'nic',
    age: 20,
    coords: {
        x: 0,
        y: 20
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const {age}: {age: number} = profile;
const {coords: {x, y}}: {coords: {x: number; y: number}} = profile;

console.log(y);