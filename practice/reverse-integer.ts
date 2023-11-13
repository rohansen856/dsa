export default function reverse(x: number): number {
    let neg = false
    if (x < 0) {
        x = Math.abs(x)
        neg = true
    }
    let num = Number(x.toString().split("").reverse().join(""))
    if (num > ((2 ** 31) - 1) || (num * -1) < -(2 ** 31)) return 0
    return neg ? num * (-1) : num
};

console.log(reverse(9646324351))