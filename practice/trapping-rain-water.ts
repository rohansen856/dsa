
export function trap(height: number[]) {
    let n: number = height.length;
    let prev: number[] = [];
    prev[0] = -1;
    let max = height[0];
    for (let i = 1; i < n; i++) {
        prev[i] = max;
        if (max < height[i]) {
            max = height[i];

        }
    }
    let next: number[] = [];
    next[n - 1] = -1;
    max = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        next[i] = max;
        if (max < height[i]) {
            max = height[i];
        }
    }
    let mini: number[] = [];
    for (let i = 0; i < n; i++) {
        mini[i] = Math.min(prev[i], next[i]);
    }
    let water = 0;
    for (let i = 1; i < n; i++) {
        if (height[i] < mini[i]) {
            water += (mini[i] - height[i]);
        }
    }
    return water;

}