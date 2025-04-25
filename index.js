
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
let productNameA = 'Apple';
let countCaloriesA = 52;

console.log(`Add product: \nname = ${productNameA}, calories = ${countCaloriesA}`)
calorieCalculator.addProduct(productNameA, countCaloriesA);

productNameB = 'Banana';
countCaloriesB = 89;
console.log(`Add product: \nname = ${productNameB}, calories = ${countCaloriesB}`)
calorieCalculator.addProduct(productNameB, countCaloriesB);


console.log(`\nGet ${productNameB} calories = ` + calorieCalculator.getProductCalories(productNameB)); // 89
console.log(`Get ${productNameA} calories = ` + calorieCalculator.getProductCalories(productNameA));  // 52

console.log(`\n*** Remove ${productNameA} ***`);
calorieCalculator.removeProduct(productNameA);

console.log(`Сhecking the availability of the ${productNameA} in the list:\n- `
    + calorieCalculator.getProductCalories(productNameA));  // Product not found


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

let userName2 = 'jane_doe';
console.log(`Add new user: ${userName2}!`);
uniqueUsernames.addUser(userName2);

console.log(`Add new user: ${userName}!`);
uniqueUsernames.addUser(userName);



console.log(`\nСhecking the availability of the ${userName} in the list: ${uniqueUsernames.exists(userName)}`); // true
let userName3 = 'pes_patron';
console.log(`Сhecking the availability of the ${userName3} in the list: ${uniqueUsernames.exists(userName3)}`); // false
console.log(`Number of unique names: ${uniqueUsernames.count()}`); // 2
console.log(uniqueUsernames);
