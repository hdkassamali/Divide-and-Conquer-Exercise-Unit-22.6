function findFloor(arr, val) {
  let floor = -1;
  let lastIndex = arr.length - 1

  if (arr[0] > val) return floor;
  for (let i = lastIndex; i >= 0; i--) {
    if (arr[i] <= val) {
      floor = arr[i];
      return floor
    }
  }
  return floor;
}

module.exports = findFloor;
