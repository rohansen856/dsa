function frequencySort(nums: number[]): any[] {
    nums = nums.sort((a, b) => b - a)
    let occ: { freq: number, val: number }[] = []
    let ans: number[] = []
    let ind = 0
    occ.push({ freq: 1, val: nums[0] })
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            occ[ind].freq++
        } else {
            occ.push({ freq: 1, val: nums[i] })
            ind++
        }
    }

    occ = occ.sort((a, b) => a.freq - b.freq)
    for (let i = 0; i < occ.length; i++) {
        const el = occ[i];
        while (el.freq--) {
            ans.push(el.val)
        }
    }

    return [...ans]
};

console.log(frequencySort([1, 6, 4, 4, 5,]))