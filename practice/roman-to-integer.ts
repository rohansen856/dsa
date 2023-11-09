function romanToInteger(s: string): any {
    let dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    console.log(dict['I'])
    
    let strArr: string[] = Array.from(s.toUpperCase())
    for(let i: number=strArr.length-1; i>0; i--){
        let res: number = dict[strArr[0]]
        if(strArr.indexOf(dict[strArr[i]])>strArr.indexOf(dict[strArr[i-1]])){
            res -= dict[strArr[i]]
        }else{
            res += dict[strArr[i]]
        }
        return res
    }
};

romanToInteger("I")