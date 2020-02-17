// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const range = (start, end) => {
    let myArray = [];

    for (let i = start; i <= end; i++) {
        myArray.push(i);
    }

    return myArray;
};

console.log(range(1,10));


// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55


const sum = (myArray) => {
    let sumArray = 0
    for(let i = 0; i <= myArray.length - 1; i++) {
        sumArray += myArray[i];
    }
    return sumArray
}

console.log(sum(range(1, 10)));



// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]

function reverseArray(theArray) {
    let myArray = [];
    for(let i = theArray.length - 1; i >= 0; i--) {
        myArray.push(theArray[i]);
    }
    return myArray;
}

console.log(reverseArray(["A", "B", "C"]));


// Not sure if I should use math.floor... for rounding down to lower number.
function reverseArrayInPlace(anArray) {
    let valueArray = [1, 2, 3, 4, 5];
    for(let i = 0; i = anArray.length - 1; i >= 0; i--) {
        valueArray.push(anArray[i]);
    }
}
console.log(valueArray);


