//remove smallest elemnt from array. If more than one remove theelement with the lowest index. do not modify the original array
function removeSmallest(arr){
let minIndex=arr.indexOf(Math.min(...arr));
return [...arr.slice(0,minIndex),...arr.slice(minIndex+1)];
}
console.log(removeSmallest([1,1,2,2,3]));
console.log(removeSmallest([2,1,5,2,6]));