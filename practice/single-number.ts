export function singleNumber(nums: number[]): number {
    const uniqueSum = [...new Set(nums)].reduce((acc, num) => acc + num, 0);
    const arraySum = nums.reduce((acc, num) => acc + num, 0);

    return 2 * uniqueSum - arraySum;
}