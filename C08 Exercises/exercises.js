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
const candidate = [5, 5, 10, 10, 15, 15, 20, 20];
const totalTime = candidate.reduce((a, b) => a + b, 0) + 0;

function interview (subject = [], time = 0) {
    if (subject.length == 8 && time <= 120) {
        if (subject[0 || 1] <= 5 && subject[2 || 3] <= 10 && subject[4 || 5] <= 15 && subject[6 || 7] <= 20) {
            console.log("Congrats, you've qualified!")
        } else {
            console.log("Disqualified, one or more questions exceeded the time limit.")
        }
    } else if (time > 120) {
        console.log("Disqualified, did not finish within the time limit.")
    } else if (subject.length != 8) {
        console.log("Disqualified, did not finish all problems.")
    }
}

interview(candidate, totalTime);