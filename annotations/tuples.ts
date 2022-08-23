const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 90
};

// const pepsi: [string, boolean, number] = ['brown', true, 40];
// OR //
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];

console.log(pepsi);

// tuples arent very informative though so can use objects easily//

interface carStats {
    horsepower: number,
    weight: number
}
const carStats = {
    horsepower: 400,
    weight: 2335
};
console.log(carStats.horsepower);



