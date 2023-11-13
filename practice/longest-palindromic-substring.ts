function subSets(arr: string): string[]{

    return []
}

function longestPalindrome(s: string): string[] {
    const len = s.length
    const substrings: string[] = []
    for(let i: number=0; i<s.length; i++){
        const pivot = i
        let start: number=i, end: number=i
        for(let j: number=i; j>0; j--){
            console.log(j)
            // console.log(`${start}   ${end}`)
            if(s[j-1]===s[j+1]){
                start--; end++;
                continue
            }
            else{
                start=j; end=j
            }
            if(start === end ) continue
            substrings.push(s.substring(start, end))
        }
    }
    return substrings
};

console.log(longestPalindrome("ababa"))