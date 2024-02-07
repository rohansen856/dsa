function frequencySort(s: string): any {
    let newStr: { freq: number, val: string }[] = [];
    let ans: string = "";
    for (let i = 0; i < 26; i++) {
        const el = String.fromCharCode(i + 65);
        newStr.push({ freq: 0, val: el })
    }
    for (let i = 0; i < 26; i++) {
        const el = String.fromCharCode(i + 97);
        newStr.push({ freq: 0, val: el })
    }
    for (let i = 0; i < 10; i++)
        newStr.push({ freq: 0, val: `${i}` })

    for (let i = 0; i < s.length; i++) {
        const asc = s.charCodeAt(i);
        if (asc >= 97)
            newStr[(asc - 97 + 26)].freq++
        else if (asc >= 48 && asc <= 57) newStr[(asc - 48 + 26 * 2)].freq++
        else newStr[(asc - 65)].freq++
    }

    newStr = newStr.filter(el => el.freq !== 0).sort((a, b) => b.freq - a.freq)

    for (const el of newStr) {
        ans += el.val.repeat(el.freq)
    }
    return ans
};

let str = "12234567890"

console.log(frequencySort(str))