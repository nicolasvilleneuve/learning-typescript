const add = (a: number, b: number): number => {
    return a + b;
};

console.log(add(12 , 99));

const divide = (a:number, b:number): number => {
    return a/b;
};

const multiply = (a: number, b: number): number => {
    return a*b;
};

const logger = (message: string): void => {
    console.log(message);
}

const todaysWeather = {
    date: new Date(),
    weather: "sunny"
};

const weatherLogger = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(weather);
    console.log(date);
};

weatherLogger(todaysWeather);
