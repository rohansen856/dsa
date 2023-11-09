//Time complexity: O(n^2)
//Space complexity: O(1)

export default  function bubbleSort(arr: number[]): number[] {
    const n: number = arr.length;
    let swapped: boolean = false

    for(let i: number = 0; i< n-1; i++){
        for(let j: number = 0; j< n-i-1; j++){
            if(arr[j]>arr[j+1]){
                const temp: number = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }
        if(swapped === false) break
    }

    return arr;
}

import { unsortedArray } from "./array";

console.log(bubbleSort(unsortedArray))