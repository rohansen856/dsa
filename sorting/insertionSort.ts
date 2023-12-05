//Time complexity: O(n^2)
//Space complexity: O(1)


export default function insertionSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const currentElement = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }

    return arr;
}

import { unsortedArray } from "./array";
console.log(insertionSort(unsortedArray))
