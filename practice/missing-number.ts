export function missingNumber(nums: number[]): number {
    let add = 0
    let len = nums.length
    for (let i = 0; i < len; i++) {
        add += nums[i]
    }
    return (len * (len + 1) / 2) - add
};