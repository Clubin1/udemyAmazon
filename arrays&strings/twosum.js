function twoSum(nums, target){
    // input: nums[1,2,3] & int target 3
    // return i of nums that += 3
    // return [0,1]
    /*
        create map
        loop through nums for size of nums
            difference = target - currnum
            if difference is in map
                return map[difference] , i
            set map currnum = index
    */

    let numMap = new Map();
    for(let i = 0; i < nums.length; i++){
        let currNum = nums[i];
        let diff = target - currNum;
        if(numMap.hasOwnProperty(diff)){
            return [numMap[diff], i];
        }
        numMap[currNum] = i;
    }
    return null;
}
console.log(twoSum([7,2,3], 9));
// no negatives, duplicates
// nums = [] -> return null
// nums = [1] -> return null
// nums = [1,2] t = 9 -> return null