//Data Structures

// Array - Access O(1); Search O(n); Insert O(n); Delete O(n)

let arr1 = [];
let arr2 = new Array();
arr.length;
arr[0];
arr.sort();
arr.filter(x => x > 1);

// Linked List - Access O(n); Search O(n); Insert O(1); Delete O(1)

class Node{
    // to add a node
    constructor(data){
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList{
    // to make the list 
    constructor(){
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
    
    print(head){
      let current = head;
      while (current !== null){
        console.log(current.data)
        current = current.next;
      }

      //recursion

      if (head === null) return;
      console.log(head.data)
      printLinkedList(head.next);
    }

    
    
  }
  

// Queue - Access O(n); Search O(n); Insert O(1); Delete O(1)

const myQueue = []; // can use this but better to use class

const enqueue = myQueue.push('value') // add to end of queue
const dequeue = myQueue.shift() // remove from front
const peek = myQueue[0] // see first item
const getLength = myQueue.length //length of queue

// Stack - Access O(n); Search O(n); Insert O(1); Delete O(1)

const myStack = [1,2,4,5,6]; // can use this but better to use class

myStack.push('value') // puts value on end of stack
myStack.pop() // removes last value
myStack.length // gets length of stack
myStack[myStack.length-1] // shows last value

// HashTable - Access O(n); Search O(n); Insertion O(n); Deletion O(n)
// Avg case O(1)

const hashTable = new Map(); // can also create using class

hashTable.set('key', 'value')
let getKey = hashTable.get('key') // returns key
let hasKey = hashTable.has('key') // returns boolean
let sizeTable = hashTable.size // returns number of keys
let entriesInTable = hashTable.entries() // returns all entries
let getAllKeys = hashTable.keys() // returns all keys
let getAllValues = hashTable.values() // returns all values

hashTable.delete('key') // removes key
hashTable.clear() // deletes all items

// Class HashTable

class HashTable {
  constructor(){
    this.table = new Array(127); // creates a table with 127 buckets
    this.size = 0;
  }

  _hash(key){
    let hash = 0; 
    for (let i = 0; i < key.length; i++){
      hash += key.charCodeat(i);
    }
    return hash % this.table.length; // get how many buckets are available
  }

  set(key,value){
    const index = this._hash;
    //handle collision
    if(this.table[index]){
      for(let i = 0; i < this.table[index].length; i++){
        // find key/value pair in chain
        if(this.table[index][i][0]===key){
          this.table[index][i][1] = value;
          return
        }
      }
      // if not found, push new keyvalue pair
      this.table[index].push([key,value]);
    } else {
      // if nothing at index, create new array and push value
      this.table[index] = [];
      this.table[index].push([key,value])
    }
    this.size++
  }

  get(key){
    const index = this._hash(key);
    // check second level
    if(this.table[target]){
      // loop through second array to find key that matches
      for (let i =0; i < this.table.length; i++){
        if (this.table[target][i][0] === key){
          return this.table[target][i][1]
        }
      }
    }
    return undefined // if not found
  }

  remove(key){
    const index = this._hash(key);
    // check second-level array
    if (this.table[index] && this.table[index].length) {
      //loop through to find key to remove
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      // false if not found
      return false;
    }
  }

display(){
  // show all key/value pairs in hashTable
  this.table.forEach((values,index) =>{
    const chainedValues = values.map(([key,value]) => `[${key}, ${value}]`);
    console.log(`[${key}, ${value}]`);
  })
}

}

//Making a set
const setTable = new Set(); // only holds unique keys no value

setTable.add(value);
setTable.delete(value);
setTable.has(value);
setTable.clear();
setTable.forEach();
setTable.keys();
setTable.entries();
setTable.size;


// Graph

// Adjacency List (better for space and time)

const adjacencyList = new Map();

function addNode(vertex){
  // adds vertex to list with empty array 
  adjacencyList.set(vertex, [])
}

function addEdge(start,end){
  // get the starting node and push the ending node onto their array
  adjacencyList.get(start).push(end);
  adjacencyList.get(end).push(start);
}

//to create graph
dataPoints.forEach(addNode) //creates initial vertices
connections.forEach(connection => addEdge(...connection)) // for vertex add connections and use spread operator to expand connections


// Tree



// Algorithms

// Search

// Linear Search - O(n) time O(1) space

function linearSearch(arr, target){
    // transverse through all data
    let i;
    for (i = 0; i < arr.length; i++)
        if (arr[i] == target)
            return i;
    return -1;
}

//Binary Search - O(n) time; 

function binarySearch(arr, target){
let first = 0;
let last = arr.length - 1;
while (first <= last) {
    let mid = first + Math.floor((last - first) / 2);
    if (arr[mid] === target) {
        return mid;
    } else {
        if (arr[mid] < target) {
            first = mid + 1;
        } else {
            last = mid - 1;
        }
    }
    }
return -1;
}

// Depth First Search - 



// Breadth First Search - determines shortest path; transverses graph in fewest iterations

function bfs(searchValue){
  const visited = new Set(); // set bc we don't need key value pairs

  const queue = [searchValue];

  while (queue.length > 0){
    const key = queue.shift() // remove nodes from queue;
    const children = adjacencyList.get(key) // find children of node

    for (let child of children){
      if(child === 'target'){
        // do something
        console.log('found')
      }

      // enqueue if it is not in visited
      if(!visited.has(child)){
        //add to visited
        visited.add(child);
        //add to queue
        queue.push(child)
      }
    }
  }
}



// Sorting Algorithms

// Quick Sort **

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

// Merge Sort **

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

// Selection Sort

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

// Bubble Sort

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

// Insertion Sort

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

// Heap Sort

function heapSort(arr){
  // initilize n as the length of the array
  let n = arr.length;

  //rearrange array or build heap
  for (let i = Math.floor(n / 2); i >= 0; i--) {
      // call heapify function to rearrange array
      heapify(arr, heapSize, i);
  }

  //one by one extract an element from heap
  for (let i = n-1; i > 0; i--) {
      // move current root to the end
      let temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // call heapify on the reduced heap
      heapify(arr, i, 0);
  }
}

// to heapify a subtree rooted with node i which is an index in arr[], n is size of heap
function heapify(arr, n, i) {
  // initalize largest as root
  let largest = i;
  // initialize left and right as the index of the left and right children of the root
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  // if left child is larger than root, then set largest to left child
  if (left < n && arr[left] > arr[largest]) {
      largest = left;
  }

  // if right child is larger than largest, then set largest to right child
  if (right < n && arr[right] > arr[largest]) {
      largest = right;
  }

  // if largest is not root, then swap the largest with root
  if (largest != i) {
      let swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;

      // recursively call heapify on the subtree rooted with largest
      heapify(arr, n, largest);
  }   
}

// SHOW EXAMPLES OF RECURSION