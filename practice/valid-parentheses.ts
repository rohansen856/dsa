export function isValidParanthesis(s: string): boolean {
    let len = s.length
    if(len%2 !== 0) return false
    for(let i=0; i<len; i+=2){
        if(s[i]=="("){
            if(s[i+1]!==")")return false
        }
        if(s[i]=="["){
            if(s[i+1]!=="]")return false
        }
        if(s[i]=="{"){
            if(s[i+1]!=="}")return false
        }
    }
    return true
};

let s = "()[]{}"

console.log(isValidParanthesis(s))