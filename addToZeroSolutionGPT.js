let arr1 = [1, 4, 11, 2, 37, -4] // true
let arr2 = [0, 21, 33, 6, 0, -9] // true
let arr3 = [0, 1, 2, 3, 4, 5] // false

function hasPairWithSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return true
      }
    }
  }
  return false
}

console.log(hasPairWithSumZero(arr1))
console.log(hasPairWithSumZero(arr2))
console.log(hasPairWithSumZero(arr3))