function maxArea(height: number[]): number {
    let bars = height
    let max = 0
    for (let i = 0; i < bars.length; i++) {
        for (let j = i + 1; j < bars.length; j++) {
            const area = (bars[i] < bars[j] ? bars[i] : bars[j]) * (j - i)
            if (area > max) max = area
        }
    }

    return max
};

console.log(maxArea([1, 7, 8]))