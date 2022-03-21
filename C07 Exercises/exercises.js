/* === Exercise 1 === */
const redundantReturn = (str) => str;
console.log(redundantReturn("hello"))

/* === Exercise 2 === */
function parent(x) {
    return function closure() {
      // Closure is declared here.
      return x;
    };
}
  
const remember = parent("remembers me");
// Seems like the variable x would be gone after
// parent is executed, but it's not.
  
console.log(remember());
// Returns "remembers me" because the inner
// function remembers x.

/* === Exercise 3 === */
const drinks = [
    {name: "lemonade", price: 50},
    {name: "limeade", price: 10},
    {name: "orange juice", price: 30},
]
const sortByPrice = (arr) => arr.sort((a,b) => a.price - b.price);
console.log(sortByPrice(drinks));

/* === Exercise 4 === */
const getBudgets = (arr) => {
    let totalBudget = 0;
    arr.forEach(element => {
        totalBudget += element.budget;
    });
    return totalBudget;
}
console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
]));

/* === Exercise 5 === */
const toArray = (obj) => {
    let keys = [];
    let values = [];
    let newArray = [];
    keys = Object.keys(obj);
    values = Object.values(obj);
    keys.forEach((a, b) => newArray.push([keys[b], values[b]]));
    return newArray;
}
console.log(toArray({ a: 1, b: 2 , c: 3, d: 4}));
// Object.entries() does the same thing as Exercise 5! But just using that seemed like no fun