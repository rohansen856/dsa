export function spiralOrder(matrix: number[][]): number[] {
    let m = matrix.length;
    let n = matrix[0].length;
    let minr = 0, minc = 0;
    let maxr = m - 1;
    let maxc = n - 1;
    let tne = n * m;
    let count = 0;
    let v: number[] = [];
    while (minr <= maxr && minc <= maxc) {
        // right
        for (let j = minc; j <= maxc && count < tne; j++) {
            v.push(matrix[minr][j]);
            count++;
        }
        minr++;
        // down
        for (let i = minr; i <= maxr && count < tne; i++) {
            v.push(matrix[i][maxc]);
            count++;
        }
        maxc--;
        // left
        for (let j = maxc; j >= minc && count < tne; j--) {
            v.push(matrix[maxr][j]);
            count++;
        }
        maxr--;
        // up
        for (let i = maxr; i >= minr && count < tne; i--) {
            v.push(matrix[i][minc]);
            count++;
        }
        minc++;
    }
    return v;
}