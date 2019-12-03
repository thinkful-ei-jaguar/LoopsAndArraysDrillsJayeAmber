'use strict'

function average(myArray){
  let num = 0;
  for (let i=0; i < myArray.length;i++) num=num+myArray[i];
  let divide= num/myArray.length;
  return(divide);
}

function average2(myArray2){
  let sum = 0;
  myArray2.forEach(element => sum+= element);
  let divide = sum/myArray2.length;
  return(divide);
}
console.log(average2 ([3,4,5,67]));
console.log(average([3,4,5,67]));























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