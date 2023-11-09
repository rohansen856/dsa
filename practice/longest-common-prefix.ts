function longestCommonPrefix(strs: string[]): string {
    let common = strs[0]
    let commLen = common.length
    for(let i=1; i<strs.length; i++){
        for(let j=0; j<commLen; j++){
            if(common[j]===strs[i][j]){
                commLen = j
                console.log(strs[i][j])
            }else break
        }
    }
    return commLen>0?strs[0].substring(commLen):""
    
};

const strarr = ["flower","flow","flight"]

console.log(longestCommonPrefix(strarr))