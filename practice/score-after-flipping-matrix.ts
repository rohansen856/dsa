export function matrixScore(grid: number[][]): number {
    const rows = grid.length;
    const col = grid[0].length;
    for (let i = 0; i <= rows - 1; i++) {
        if (grid[i][0] == 0) {
            for (let j = 0; j < col; j++) {
                if (grid[i][j] == 0) grid[i][j] = 1;
                else grid[i][j] = 0;
            }
        }
    }
    for (let j = 0; j <= col - 1; j++) {
        let zeros = 0;
        let ones = 0;
        for (let i = 0; i <= rows - 1; i++) {
            if (grid[i][j] == 0) zeros++;
            else ones++;
        }
        if (zeros > ones) {
            for (let i = 0; i <= rows - 1; i++) {
                if (grid[i][j] == 0) grid[i][j] = 1;
                else grid[i][j] = 0;
            }
        }
    }
    let sum = 0;
    for (let i = 0; i <= rows - 1; i++) {
        let x = 1;
        for (let j = col - 1; j >= 0; j--) {
            sum += grid[i][j] * x;
            x *= 2;
        }
    }
    return sum;
}
