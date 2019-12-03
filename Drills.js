'use strict'

function max (arr) {
  let i = 1;
  let maxNum = arr[0];
  while(i < arr.length) {
    if(maxNum < arr[i])
      maxNum = arr[i];
    i++;
  }
  return maxNum;
}

function min (arr) {
  let i = 1;
  let minNum = arr[0];
  while(i < arr.length) {
    if(minNum > arr[i])
      minNum = arr[i];
    i++;
  }
  return minNum;
}

console.log(max([3,4,5,67,7,8,6,4,3]));
console.log(min([3,4,5,67,7,8,6,4,3]));