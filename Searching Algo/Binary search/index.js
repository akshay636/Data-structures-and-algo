function binaryS(arr, x, low, high) { //recurisive method
    if (!arr.length) return false;
    if (low > high) return false;
    else {
        let mid = Math.ceil((low + high) / 2);
        if (x == arr[mid]) return mid;
        else if (x > arr[mid]) {
            return binaryS(arr, x, mid + 1, high);
        } else {
            return binaryS(arr, x, low, mid - 1); // Fix this line
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12];
let low = 0; // Set low to the first index of the array
let high = arr.length - 1;
// console.log(binaryS(arr, 9, low, high));

//iterative method
function iterative(arr,x){
 let low  = arr[0]
 let high  = arr[arr.length-1]
 while(low<=high){
    let mid = Math.ceil((low+high/2))
    if(x==arr[mid]) return mid
    else if(x>arr[mid]){
      low = mid+1
    }else{
      high = mid-1
    }
 }
 return -1
}
console.log(iterative(arr,4));