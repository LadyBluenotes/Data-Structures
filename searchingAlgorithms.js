// linear search - O(n)

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i;
        } else {
            return -1;
        }
    }
}