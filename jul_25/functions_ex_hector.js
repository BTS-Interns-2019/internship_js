const person = {};

function name(obj, value) {
    obj.name = value;
}

function address(obj, value) {
    obj.address = value;
}

function number(obj, value) {
    obj.number = value;
}

function job(obj, value) {
    obj.job = value;
}

function age(obj, value) {
    obj.age = value > 18 ? function () { return 'hurray'; } : value;
}

function favoriteFood(obj, values) {
    obj.favoriteFood = values;
}

function favoritePhrase(obj, value) {
    obj.favoritePhrase = value;
}

name(person, 'Hector');
address(person, '24 Main Road');
number(person, 6563200782);
job(person, 'Intern');
age(person, 25);
favoriteFood(person, ['Pizza', 'Sandwich', 'Sushi']);
favoritePhrase(person, 'A man must stand erect, not be erected by others');

console.log(person);

function averageSpeed() {
    let counter = 0;
    let speedSum = 0;
    return function funcionHija(speed) {
        counter++;
        speedSum += speed;
        return speedSum / counter;
    }
}

let average = averageSpeed();
console.log(average(100)); // 100
console.log(average(50)); // 75
console.log(average(75)); // 75