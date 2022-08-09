// Selection sort - time O(n^2)
// Works by finding the smallest element in the array and swapping it with the first element.

// function for selection sort
function selectionSort(arr) {
  // intialize the minimum index
    let minIndex = 0;
    let n = arr.length;
    // one by one move boundary of unsorted subarray
    for (let i = 0; i < n - 1; i++) {
        // find the minimum element in unsorted array
        minIndex = i;
        //loop through the unsorted array and find the minimum element
            // i+1 is the index of the next element in the array
            // j < n is the condition to check if the index is less than the length of the array
        for (let j = i + 1; j < n; j++) {
            // if the element at index j is less than the element at index minIndex, then update the minIndex
            if (arr[j] < arr[minIndex]) {
                // update the minIndex to the index of the element at index j
                minIndex = j;
            }
        }
        // swap the minimum element with the first element using the swap function
        swap(arr, i, minIndex);
    }
    // return the sorted array
    return arr;
}

// function to swap two elements in an array using original array, index from first element, and index from second element
function swap(arr, i, j) {
    // temp is used to store the value of the element at index i
    let temp = arr[i]
    // assign the value of the element at index j to the element at index i
    arr[i] = arr[j]
    //reassign the temp value to the element at index j to complete the swap
    arr[j] = temp
}

console.log(selectionSort([3, 0, 2, 5, -1, 4, 1])) // [-1, 0, 1, 2, 3, 4, 5] 




// Bubble sort - time O(n^2)
// Works by comparing the adjacent elements and swapping them if they are in the wrong order.

function bubbleSort(arr) {
    // intiailize n as the length of the array
    let n = arr.length;
    // transverse through the array and compare the adjacent elements
    for (let i = 0; i < n - 1; i++) {
        // last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            // if the element at index j is greater than the element at index j+1, then swap them
            if (arr[j] > arr[j + 1]) {
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
            }
        }
    }
    // return the sorted array
    return arr;
}

// Test the bubble sort function
console.log(bubbleSort([3, 0, 2, 5, -1, 4, 1])) // [-1, 0, 1, 2, 3, 4, 5]

// Insertion Sort - time O(n^2), space O(1)

function insertionSort(arr) {
    // initialize n as the length of the array
    let n = arr.length;
    // initialize key as the first element in the array
    let key;
    // iterate through array to start
    for (let i = 1; i < n; i++) {
        // set key to the element at index i
        key = arr[i];
        // set j to i - 1
        let j = i - 1;
        // while j is greater than or equal to 0 and the element at index j is greater than key, then move j back one index
        while (j >= 0 && arr[j] > key) {
            // move the element at index j+1 to index j
            arr[j + 1] = arr[j];
            // move j back one index
            j--;
        }
        // move the key to index j+1
        arr[j + 1] = key;
    }
    // return the sorted array
    return arr;
}

// Test the insertion sort function
console.log(insertionSort([4,7,3,9,1])) // [1,3,4,7,9]




// Merge Sort - time O(n log n), space O(n)

function mergeSort(arr) {
    // if array is empty or has one element, then return the array
    if (arr.length < 2) {
        return arr;
    }
    // initialize mid as the middle index of the array ensuring number will be integer and not float
    let mid = Math.floor(arr.length / 2);
    // intialize both halves of the array as the mergeSort function is called recursively
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    // use recursion to merge the two halves of the array
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

// function to merge two arrays
function merge(left, right) {
    // intialize result array
    let resultArr = [];
    // intialize left and right index
    let leftIndex = 0;
    let rightIndex = 0;

    // concatenate values into resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        // if the element at index leftIndex is less than the element at index rightIndex, then add the element at index leftIndex to the result array
        if (left[leftIndex] < right[rightIndex]) {
            resultArr.push(left[leftIndex]);
            // move leftIndex forward one index to avoid duplicates
            leftIndex++;
        } else {
            // else add the element at index rightIndex to the result array
            resultArr.push(right[rightIndex]);
            // move rightIndex forward one index to avoid duplicates
            rightIndex++;
        }
    }
    // concatenate result array to complete list of elements and avoid the last element not being added to the result array
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// Test the merge sort function
console.log(mergeSort([4,7,-4, 2, 8, 1, 3, 9, 5])) // [-4,1,2,3,4,5,7,8,9]




// Quick Sort - time O(n log n), space O(log n)

function quickSort(items, left, right){
    // intialize index
    let index;
    // if length of items is greater than 1
    if (items.length > 1) {
        // call partition function to get index
        index = partition(items, left, right);
        // if index is greater than left, then call quickSort function on the left side of the array
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        // if index is less than right, then call quickSort function on the right side of the array
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    // return the sorted array
    return items;
}

// partition is called n times - given an array and an element x to compare, it puts x at its correct position in a sorted array and puts all smaller items before x and all larger items after x
function partition(arr){
    // if array is empty or has one element, then return the array
    if (arr.length < 2) {
        return arr;
    }
    // initialize pivot point as either first, last, midpoint or random element in array (this is using last element as pivot point)
    let pivot = arr[arr.length - 1];
    // center pivot - pivot = arr[0]
    // mid pivot - pivot = arr[Math.floor(arr.length / 2)]
    // random pivot - pivot = arr[Math.floor(Math.random() * arr.length)]

    // while the left index is less than or equal to the right index, then continue to sort the array
    while (leftIndex <= rightIndex) {
        // while the items at leftIndex are less than the pivot, then increment leftIndex
        while (arr[leftIndex] < pivot) {
            leftIndex++;
        }
        // while the items at rightIndex are greater than the pivot, then decrement rightIndex
        while (arr[rightIndex] > pivot) {
            rightIndex--;
        }
        // if left index is greater than or equal to right index, then swap the elements at leftIndex and rightIndex
        if (leftIndex <= rightIndex) {
            // swap function is used to swap the elements at leftIndex and rightIndex
            swapQuick(arr, leftIndex, rightIndex);
            // increment leftIndex and decrement rightIndex
            leftIndex++;
            rightIndex--;
        }
    }
    // return the sorted array
    return arr;
}

// swap function to swap the elements at leftIndex and rightIndex
function swapQuick(arr, leftIndex, rightIndex) {
    // initialize temp variable to hold the element at leftIndex
    let temp = arr[leftIndex];
    // set the element at leftIndex to the element at rightIndex
    arr[leftIndex] = arr[rightIndex];
    // set the element at rightIndex to the temp variable
    arr[rightIndex] = temp;
}
let arr = [4,6,7,2,8,1,3,9,5]; 
// Test the quick sort function
console.log(quickSort(arr, 0, arr.length - 1)) // [1,2,3,4,5,6,7,8,9]




