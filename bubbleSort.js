//BubbleSort
function bubbleSort(values) {
  for(let i=0; i < values.length-1; i++){
    for (let j = 0; j < values.length-1; j++){
      if(values[j]<values[j+1]){
        let tmp = values[j]
        values[j] = values[j+1]
        values[j+1] = tmp
      }
    }
  }
  return values
}
// Main
let arr = [5,2,4,1,10,3,20,0,21]
console.log(arr);
console.log(bubbleSort(arr));