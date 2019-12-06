function merge_sort(arr, mid = arr.length/2) {
  if (arr.length<2) {
    return arr
  }
  const left = arr.splice(0, mid)
  return merge(merge_sort(left), merge_sort(arr))
}

function merge(arrLeft, arrRight) {
  let sort_array = []
  while (arrLeft.length && arrRight.length) {
    if (arrLeft[0] < arrRight[0]) {
      sort_array.push(arrLeft.shift())
      sort_array.push(arrRight.shift())
    }
    else {
      sort_array.push(arrRight.shift())
      sort_array.push(arrLeft.shift())
    }
  }
  return sort_array
}

let array = [8, 2, 7, 3, 23, 50, 0, 1]
console.log(array);
console.log(merge_sort(array));