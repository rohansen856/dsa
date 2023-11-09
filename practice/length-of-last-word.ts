function lengthOfLastWord(s: string): any {
    if(!s.includes(" ")) return s.length

    const sArr: string[] = s.split(" ")
    for(let i=sArr.length-1; i>0; i--){
        if(sArr[i] !== "" && sArr[i] !== " ") return sArr[i]
    }
    return sArr
};

let s="a  "

console.log(lengthOfLastWord(s))
// console.log(" a".split(" "))