
console.log('#1. Калькулятор калорійності продуктів через клас.')
class CalorieCalculator {
    constructor() {
        this.products = new Map();
    }


    addProduct(productName, calories) {
        this.products.set(productName, calories);
    }


    getProductCalories(productName) {
        if (this.products.has(productName)) {
            return this.products.get(productName);
        } else {
            return 'Product not found';
        }
    }


    removeProduct(productName) {
        if (this.products.has(productName)) {
            this.products.delete(productName);
        } else {
            return 'Product not found';
        }
    }
}


const calorieCalculator = new CalorieCalculator();
let productName = 'Apple';
let countCalories = 52;

console.log(`Add product: \nname = ${productName}, calories = ${countCalories}`)
calorieCalculator.addProduct(productName, countCalories);

productName = 'Banana';
countCalories = 89;
console.log(`Add product: \nname = ${productName}, calories = ${countCalories}`)
calorieCalculator.addProduct(productName, countCalories);


console.log(`\nGet ${productName} calories = ` + calorieCalculator.getProductCalories(productName)); // 89

productName = 'Apple';
console.log(`Get ${productName} calories = ` + calorieCalculator.getProductCalories(productName));  // 52

console.log(`\n*** Remove ${productName} ***`);
calorieCalculator.removeProduct(productName);

console.log(`Сhecking the availability of the ${productName} in the list:\n- `
    + calorieCalculator.getProductCalories(productName));  // Product not found


console.log('\n \n \n#2.Унікальні користувачі.')
class UniqueUsernames {
    constructor() {
        this.usernames = new Set();
    }


    addUser(username) {
        this.usernames.add(username);
    }


    exists(username) {
        return this.usernames.has(username);
    }


    count() {
        return this.usernames.size;
    }
}


const uniqueUsernames = new UniqueUsernames();

let userName = 'john_doe';
console.log(`Add new user: ${userName}!`);
uniqueUsernames.addUser(userName);

userName = 'jane_doe';
console.log(`Add new user: ${userName}!`);
uniqueUsernames.addUser(userName);

userName = 'john_doe';
console.log(`Add new user: ${userName}!`);
uniqueUsernames.addUser(userName);



console.log(`\nСhecking the availability of the ${userName} in the list: ${uniqueUsernames.exists(userName)}`); // true
userName = 'pes_patron';
console.log(`Сhecking the availability of the ${userName} in the list: ${uniqueUsernames.exists(userName)}`); // false
console.log(`Number of unique names: ${uniqueUsernames.count()}`); // 2
console.log(uniqueUsernames);
