function numSquares(n: number): number {
    let arr: number[] = []
    arr.length = 10000
    arr.fill(Number.MAX_VALUE)
    arr[0] = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            arr[i] = Math.min(arr[i], arr[i - j * j] + 1);
        }
    }
    return arr[n]
};

console.log(numSquares(12))