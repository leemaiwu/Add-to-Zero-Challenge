// Starting array
let arr1 = [1, 4, 11, 2, 37, -4] // true
let arr2 = [0, 21, 33, 6, 0, -9] // true
let arr3 = [0, 1, 2, 3, 4, 5] // false

let arr = arr1

// 1: loop through an array
// 2: add the current number to each of the following numbers
// 3: condition to check if the number that was added = 0
// 4: print true if it does add to zero
// 5: if none of the numbers add to zero print false
// 6: set a variable for the answer to be true

let answer = false

for (let i = 0; i < arr.length; i++) {
  for (let k = i + 1; k < arr.length; k++) {
    if (arr[i] + arr[k] === 0) {
      answer = true
    }
  }
}

console.log(answer)