const factorial = (n: number): number => n > 1 ? n * factorial(n - 1) : 1;

export default function countHomogenous(s: string): number {
    const strArr: string[] = Array.from(s)
    let index: number[][] = []
    let i: number = 0 , end: number = 0, start: number = 0
    while(i<s.length){
        if(strArr[i]===strArr[i+1]){
            end++
        } else {
            // console.log([start, end])
            index.push([start, end])
            start=i+1; end=i+1
        }
        i++
    }
    let res: number = 0
    console.log(index)
    for(const ind of index) {
        let leng = ind[1]-ind[0]+1
        res += (leng)*(leng+1)/2
    }

    return res
};
const arr = "weecf"
console.log(countHomogenous(arr))