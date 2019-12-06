const defaultSortingAlgorithm = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

const quickSort = (unsortedArray, sortingAlgorithm = defaultSortingAlgorithm) => {
  // immutable version
  const sortedArray = [...unsortedArray];

  const swap = (arrayToSwap, i, j) => {
    const a = arrayToSwap[i];
    arrayToSwap[i] = arrayToSwap[j];
    arrayToSwap[j] = a;
  };

  const partition = (arrayToDivide, start, end) => {
    const pivot = arrayToDivide[end];
    let splitIndex = start;
    for (let j = start; j < end; j++) {
      const sortValue = sortingAlgorithm(arrayToDivide[j], pivot);
      if (sortValue === -1) {
        swap(arrayToDivide, splitIndex, j);
        splitIndex++;
      }
    }
    swap(arrayToDivide, splitIndex, end);
    console.log(`Now: ${arrayToDivide}`);
    return splitIndex;
  };

  // Recursively sort sub-arrays.
  const recursiveSort = (arraytoSort, start, end) => {
    // stop condition
    if (start < end) {
      const pivotPosition = partition(arraytoSort, start, end);
      recursiveSort(arraytoSort, start, pivotPosition - 1);
      recursiveSort(arraytoSort, pivotPosition + 1, end);
    }
  };

  // Sort the entire array.
  recursiveSort(sortedArray, 0, unsortedArray.length - 1);
  return sortedArray;
};

let array = [0,100,30,10,20,70]
console.log(array);
console.log(quickSort(array))