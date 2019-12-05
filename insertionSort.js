//BubbleSort
function insertionSort() {
  for (let i = 1; i < values.length; i++) {
    let tmp = values[i]
    let j = i-1
    for (j; j >= 0 && values[j] > tmp; j--) {      
      values[j+1] = values[j]      
    }
    values[j+1] = tmp
  }
}
// Main
values = [6,4,3,11,10]
console.log(values);
insertionSort()
console.log(values);