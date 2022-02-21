// exercise #3
const testObject = {a: "apple", b: "bear", c: "carpet"};
let arr1 = testObject.keys;
const divider = (victim) => [Object.keys(victim), Object.values(victim)];

console.log("Behold, my ultimate technique... Not even your objects are safe!");
console.log(divider(testObject));