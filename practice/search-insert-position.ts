function binarySearch(arr: number[], target: number, start: number = 0, end: number = arr.length - 1): number {
    if (start > end) {
      return -1; // Element not found
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // Element found
    } else if (arr[mid] < target) {
      return binarySearch(arr, target, mid + 1, end); // Search in the right half
    } else {
      return binarySearch(arr, target, start, mid - 1); // Search in the left half
    }
}

export default function searchInsert(nums: number[], target: number): number {
    const index = binarySearch(nums, target)
    if(index < 0) {
        if(nums[nums.length-1]<=target) return nums.length
        else if(nums[0]>=target)return 0
        for(let i=0; i<nums.length; i++){
            if(nums[i]>target) return i
            // else return 
        }
    }
    return index
};

console.log(searchInsert([1,3,5,6], 2))