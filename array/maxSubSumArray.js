function maxSum(arr, num){
    let max =0
    for(let i =0; i< arr.length-num+1; i++){
        console.log(i)
        let temp =0;
        for(let j =0; j<num; j++){
            temp += arr[i+j]
        }
        if(temp>max){
            max = temp
        }
      
    }
    return max
}
console.log(maxSum([1,2,3,4,1,2],3))