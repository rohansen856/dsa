function longestCommonPrefix(strs: string[]): any {
    let common = strs[0]
    for(let i=1; i<strs.length; i++){
        for(let j=0; j<strs[0].length; j++){
            if(Array.from(strs[0]) === Array.from(strs[j])){
                
            }
        }
    }
};

let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))