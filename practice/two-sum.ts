function twoSum(nums: number[], target: number): number[] {
    let pos1: number = 0, pos2: number = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] === target){
                pos1 = i; pos2 = j
                return [pos1, pos2]
            }
        }
    }
    return [0, 0]
};