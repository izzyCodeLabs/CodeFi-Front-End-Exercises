const testArray = [false, false, false];

const countTrue = (array) => {
    let truth = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] === true) {truth++}
    }
    return truth;
}

console.log(countTrue(testArray));