const carMakers: string[] = ['ford', 'chevrolet', 'ferrari'];


const carsByMake: string[][] = [];

const car = carMakers[0];



console.log(carMakers.map((car: string):string => {
    return car.charAt(1);
}));

// flexible types //
const importantDates = [new Date(), '2030-10-10'];


const carTuple: string() 