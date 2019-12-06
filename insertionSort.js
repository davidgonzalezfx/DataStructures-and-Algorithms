//Insertion
function insertionSort(values) {
  for (let i = 1; i < values.length; i++) {
    let tmp = values[i]
    let j = i-1
    for (j; j >= 0 && values[j] > tmp; j--) {      
      values[j+1] = values[j]      
    }
    values[j+1] = tmp
  }
  return values
}
// Main
let values = [6,4,3,11,10]
console.log(values);
console.log(insertionSort(values))