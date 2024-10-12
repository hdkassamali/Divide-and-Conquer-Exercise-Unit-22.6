function sortedFrequency(arr, num) {
  let count = -1;
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  if (num > arr[rightIndex]) {
    return count;
  }

  if (num < arr[leftIndex]) {
    return count;
  }

  while (arr[leftIndex] < num) {
    leftIndex++;
  }

  while (arr[rightIndex] > num) {
    rightIndex--;
  }

  count = rightIndex - leftIndex + 1;
  return count;
}

module.exports = sortedFrequency;
