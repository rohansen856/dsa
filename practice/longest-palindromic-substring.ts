function longestPalindrome(s: string): string {
    const len = s.length;

    let maxLength = 1, startPt = 0;

    for (let i = 0; i < len; i++) {
        let start = i, end = i;
        let resLen = 0
        if (s[start - 1] === s[start] || s[start + 1] === s[start]) {
            if (s[start - 1] === s[start]) {
                startPt = start
                maxLength = 2
            }
        }
        while (s[start - 1] === s[end + 1] && start > -1 && end < len) {
            start--;
            end++;
        }
        resLen = end - start + 1
        if (resLen >= maxLength) {
            startPt = start;
            maxLength = resLen
        }
    }

    let res = ""
    for (let i = startPt; i < startPt + maxLength; i++)
        res += (s[i] === undefined ? "" : s[i]);
    return res
}

console.log(longestPalindrome("sstss"))