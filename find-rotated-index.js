function findRotatedIndex(arr, int) {
  rightIndex = arr.length - 1;
  middleIndex = Math.floor((arr.length - 1) / 2);

  for (let i = 0; i <= middleIndex; i++) {
    if (arr[i] === int) return i;
  }

  for (let i = rightIndex; i > middleIndex; i--) {
    if (arr[i] === int) return i;
  }

  return -1;
}

module.exports = findRotatedIndex;
