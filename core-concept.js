//variable, let, const

let money = 20;
money = 12;

console.log(money);

const price = 30;
console.log(price);

// template string
const person = {
    name: 'Shahnewaz',
    age: '24',
    address: 'Sherpur'
};
const statement = `this person ${person.name}`;
console.log(statement);

// array
const numbers = [34, 30, 50];
const respected = ['Muhammad', 'Shahnewaz'];
const products = [{name: 'laptop', price: 23}, {name: 'driver', price: 300}];

const result2 = products.map(product => product.name);
// console.log(result2);
for (let i = 0; i < result2.length; i++) {
    const element = result2[i];
    console.log(element);
    
}
