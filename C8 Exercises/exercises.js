/* === Exercise 1 === */
function makePlusFunction(add) {
    return (base) => {return base+add}
}
const plusNum = makePlusFunction(-5);
console.log(plusNum(8));

/* === Exercise 2 === */

function asciiCapitalize(str) {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) % 2 == 0) {
            newString += str.charAt(i).toUpperCase();
        } else {
            newString += str.charAt(i).toLowerCase();
        }
    }
    return newString;
}

console.log(asciiCapitalize("Oh what a beautiful morning."));

/* === Exercise 3 === */