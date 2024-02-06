function longestConsecutive(nums: number[]): any {
    nums = [...new Set(nums.sort((a, b) => a - b))]
    let len = 0
    let res = 0

    for (let i = 1; i < nums.length; i++) {
        while (nums[i] == nums[i - 1] - 1 && i < nums.length - 1) {
            res++
            i++
        }
        len = Math.max(res, len)
        res = 0
    }

    return len;
};

console.log(longestConsecutive([3, 7, 2, 5, 8, 4, 6, 1]))