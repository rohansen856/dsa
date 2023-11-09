function isPalindrome(x: number): any {
    let nums = Array.from(x.toString())
    let len = nums.length
    for(let i=0; i<len; i++){
        console.log(nums[i], nums[len-1-i])
        if(nums[i] !== nums[len-1-i]) return false
    }
    return true
};

console.log(isPalindrome(1212))