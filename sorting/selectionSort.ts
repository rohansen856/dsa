//Time complexity: O(n^2)
//Space complexity: O(1)

export default function selectionSort(arr: number[]): number[] {
    const n: number = arr.length;

    for (let i: number = 0; i < n-1; i++) {
        let minIndex = i;

        for (let j: number = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j
        }

        const temp: number = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp; 
    }
    
    return arr;
}

import { unsortedArray } from "./array";

console.log(selectionSort(unsortedArray))