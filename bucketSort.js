//Bucket sort
const array = [5, 4, 1, 2, 3]
function bucketSort(arr, min, max) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (map.get(arr[i]) === undefined) {
        map.set(arr[i], 1);
      } else {
        map.set(arr[i], map.get(arr[i]) + 1);
      }
    }
    let arrI = 0;
    for (let i = min; i <= max; i++) {
      let numAppearing = map.get(i);
      while (numAppearing) {
        arr[arrI] = i;
        numAppearing--;
        arrI++;
      }
    }
    return arr;
  }
  
console.log(bucketSort(array, 1, 5))