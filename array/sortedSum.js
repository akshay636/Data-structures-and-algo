var sortedSquares = function(nums) {
    let res =[]
    for(let i of nums){
        res.push(Math.pow(i,2))
    }
    return res.sort((a,b)=>a-b)
};
/////-------optimize---------/////
var sortedSquares = function(nums) { //optimize code
    const totalNums = nums.length;
    let left = 0;
    let right = totalNums - 1;
    const result = new Array(totalNums);

    for (let i = right; i >= 0; i--) {
        const leftValue = nums[left];
        const rightValue = nums[right];

        if (Math.abs(leftValue) > Math.abs(rightValue)) {
            result[i] = leftValue ** 2;
            left++;

            continue;
        }

        result[i] = rightValue ** 2;
        right--;
    }

    return result;
};