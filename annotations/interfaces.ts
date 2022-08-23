interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `${this.name}, ${this.year}, ${this.broken}`;
    }
};

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
};

printVehicle(oldCivic);



const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `${this.color}, ${this.carbonated}, ${this.sugar}`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(drink);
printSummary(oldCivic);