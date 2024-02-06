function groupAnagrams(strs: string[]): string[][] {
    if (strs.length <= 1) return [strs]
    let newArr: { el: string, index: number }[] = []
    let hash: string[] = []
    let ans: string[][] = []
    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split('').sort().join('');
        newArr.push({ el: sortedStr, index: i })
    }
    newArr.sort((a, b) => a.el.localeCompare(b.el));
    hash.push(strs[newArr[0].index])
    for (let i = 1; i < newArr.length; i++) {
        if (newArr[i - 1].el == newArr[i].el) {
            hash.push(strs[newArr[i].index])
        }
        else {
            ans.push(hash)
            hash = [strs[newArr[i].index]]
        }
    }
    ans.push(hash)
    return ans;
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))