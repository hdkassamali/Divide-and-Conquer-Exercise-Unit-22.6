function findRotationCount(arr) {
  let count = 0;
  let lastIndex = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[lastIndex] < arr[i]) {
      count++;
    }
  }
  return count;
}

module.exports = findRotationCount;
