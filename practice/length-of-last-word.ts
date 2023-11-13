export default function lengthOfLastWord(s: string): any {
    if (!s.includes(" ")) return s.length
    let index: number[] = []
    let started: boolean = false
    for (let i = s.length - 1; i > -1; i--) {
        console.log(s[i])
        if (s[i] !== " " && started === false) {
            index.push(i)
            started = true
        }
        if (started === true && s[i] === " ") {
            index.push(i)
            break
        }
    }
    return index.length > 0
        ? (index.length === 0 ? 1 : index[0] - (index[1] ?? -1))
        : 0
};

let s = "abb  "

console.log(lengthOfLastWord(s))
// console.log(" a".split(" "))