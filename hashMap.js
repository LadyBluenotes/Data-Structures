// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

var arr1 = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var arr2 = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

function updateInventory(arr1, arr2){

    // create an hashmap to store the inventory
    let obj = {};

    // loop through the first array and add each item to the hashmap
    for (let item of arr1){
        obj[item[1]] = item[0];
    }

    // loop through the second array
    for (let i =0 ; i<arr2.length; i++){
        // intiailize a variable to store the item
        let key = arr2[i][1];
        let value = arr2[i][0];
        if (obj[key] === undefined){
            // if the item is in the hashmap, add the value to the item's value
            obj[key] = value;
        } else {
            // otherwise, add the value to the item's value
            obj[key] += value;
        }
    }

    // create an array to store the inventory
    let answer = Object.entries(obj);
    // sort the array alphabetically
    answer.sort((a,b) => a[0].localeCompare(b[0]));
    // return the answer
    return answer;
}