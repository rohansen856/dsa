function romanToInteger(s: string): any {
    let dict = [
        {sign: "I", value: 1},
        {sign: "V", value: 5},
        {sign: "X", value: 10},
        {sign: "L", value: 50},
        {sign: "C", value: 100},
        {sign: "D", value: 500},
        {sign: "M", value: 1000},
    ]
    let total: number = 0
    for(let i= s.length-1; i>0; i--){
        const value1 = dict.findIndex(num=>num.sign===s[i])
        const value2 = dict.findIndex(num=>num.sign===s[i-1])
        if(value1<value2){
            total += value1
        }
    }

};

romanToInteger("I")