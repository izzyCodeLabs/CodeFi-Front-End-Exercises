// Exercise 1
const triangleArea = (b,h) => (b*h)/2;
console.log(triangleArea(2,9));

//Exercise 2
const arrayRange = (x,y) => {
    let array = [];
    if (x < y) {
        for (let i = x; i <= y; i++) {
            array.push(i);
        }
    } else if (x > y) {
        for (let i = x; i >= y; i--) {
            array.push(i);
        }
    } else {
        console.log("Your numbers seem to be equal, oops!")
    }
    return array;
};
console.log(arrayRange(-10,10));

//Exercise 3
const sumProducts = (x,y,z) => {
    if (Array.isArray(x) == true && Array.isArray(y) == true && Array.isArray(z) == true) {
        let result = x.reduce((a,b) => a*b) + y.reduce((a,b) => a*b) + z.reduce((a,b) => a*b);
        return result;
    } else {
        console.log("Use arrays!");
    }
};
console.log(sumProducts([1,2],[2,3],[3,4]));