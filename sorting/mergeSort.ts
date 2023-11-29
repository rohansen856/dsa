//Time complexity: O(n log n)
//Space complexity: O(n)

export default function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const middle: number = Math.floor(arr.length / 2);
    const left: number[] = arr.slice(0, middle);
    const right: number[] = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}


function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

import { unsortedArray } from "./array";

console.log(mergeSort(unsortedArray))