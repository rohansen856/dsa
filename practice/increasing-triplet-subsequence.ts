function increasingTriplet(nums: number[]): boolean {
    let a: number = Number.MAX_VALUE, b: number = Number.MAX_VALUE
    for (const num of nums) {
        if (a >= num) a = num;
        else if (b >= num) b = num;
        else return true
    }
    return false
};

let nums = [2, 1, 5, 0, 4]
console.log(increasingTriplet(nums))