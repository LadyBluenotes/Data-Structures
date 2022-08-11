// linear search - O(n)

function linearSearch(arr, target) {
    // iterate through array
    for (let i = 0; i < arr.length; i++){
        // if the element at index i is equal to the target, then return the index, else keep iterating
        if (arr[i] === target) {
            return i;
        } 
    }
    // if the target is not found, then return -1
    return -1;
}

// binary search - O(log n)

function binarySearch(arr, target) {
    // initialize first and last index of array
    let first = 0;
    let last = arr.length - 1;
    // while first is less than or equal to last, then keep searching
    while (first <= last) {
        // find mid point of array by taking the average of first and last index and rounding down and add start back to avoid integer overflows
        let mid = start + Math.floor((last - first) / 2);

        // if element is at midpoint, then return midpoint
        if (arr[mid] === target) {
            return mid;
        } else {
            // if element is less than target, then set first to mid + 1
            if (arr[mid] < target) {
                first = mid + 1;
            } else {
                // if element is greater than target, then set last to mid - 1
                last = mid - 1;
            }
        }
    }
    // if the target is not found, then return -1
    return -1;
}