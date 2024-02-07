function expandAroundCenter(s: string, left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return right - left - 1;
}

function longestPalindrome(s: string): string {
    let start: number = 0;
    let end: number = 0;

    for (let i = 0; i < s.length; i++) {
        let left = i, right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        const evenLen: number = right - left - 1;

        left = i, right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        const oddLen: number = right - left - 1;

        let ans = evenLen > oddLen ? evenLen : oddLen

        if (ans > end - start) {
            start = i - Math.floor((ans - 1) / 2);
            end = i + Math.floor(ans / 2);
        }
    }

    return s.substring(start, end + 1);
};