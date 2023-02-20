// Starting array
let array1 = [1, 4, 11, 2, 37, -4] // true
let array2 = [0, 21, 33, 6, 0, -9] // true
let array3 = [0, 1, 2, 3, 4, 5] // false
answer = false

for (let x = 0; x < array1.length; x++) {
  for (let y = x + 1; y < array1.length - 1; y++ ) {
    if (array1[x] + array1[y + 1] === 0) {
      answer = true
    }
  }
}

for (let x = 0; x < array2.length; x++) {
  for (let y = x + 1; y < array2.length - 1; y++ ) {
     if (array2[x] + array2[y + 1] === 0) {
      answer = true
    }
  }
}

for (let x = 0; x < array3.length; x++) {
  for (let y = x + 1; y < array3.length - 1; y++ ) {
    if (array3[x] + array3[y + 1] === 0) {
      answer = true
    }
  }
}

console.log(answer)
