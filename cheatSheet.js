//Data Structures

// Array - Access O(1); Search O(n); Insert O(n); Delete O(n)

let empty = [];
let arr1 = [1,2,3];
let arr2 = new Array();
let arr3 = new Array('c', 'a', 'b');
arr1.length; // 3
arr3[0]; // 'c'
arr3.sort(); // ['a', 'b', 'c']
arr.filter(x => x > 1); // [2, 3]

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
    
    insertHead(value){
      this.length++
      let newNode = new Node(value);
      
      if(this.head){
        newNode.next = this.head
        this.head = newNode
        return newNode
      }
      
      this.head = this.tail = newNode
      return newNode
    }
  
    insert(value){
      // inc length & new node class
      this.length++;
      let newNode = new Node(value);
     //if tail = true, make new value tail
      if (this.tail){
        this.tail.next = newNode;
        this.tail = newNode;
        return newNode;
      }
      //if tail = false, make new value head
      this.head = this.tail = newNode;
      return newNode;
    }
    
    insertIndex(value,index){
      if(index>= this.length){
        throw new Error('Index out of bounds')
      }
      if (index === 0){
        return this.insertHead(value)
      }
      let previousNode = null;
      let currentNode = this.head;
      for (let i = 0; i < index; i++){
        previousNode = currentNode;
        currentNode = currentNode.next;
        const newNode = new Node(value);
        newNode.next = currentNode;
        previousNode.next = newNode;
        this.length++
        return newNode;
      }
    }
    
    print(){
      //see what is inside instance
      let current = this.head;
      while(current){
        console.log(current.value);
        current = current.next
      }  
    }
    
    remove(){
      if (this.tail){
        this.length--;
        
        const tailNode = this.tail;
        let currentNode = this.head;
        
        while (currentNode.next != tailNode){
          currentNode = currentNode.next;
        }
   
        const beforeTail = currentNode;
        this.tail = beforeTail;
        this.tail.next = null;
        
        return tailNode;
      }
      return undefined;
    }
    
    removeHead(){
      if(this.head){
        this.length--;
        const removedNode = this.head;
        this.head = this.head.next;
        return removedNode;
      }
      return undefined;
    }
    
    removeIndex(index){
      if(index>= this.length){
        throw new Error('Index out of bounds')
      }
      if (index === 0){
        return this.removeHead()
      }
      let previousNode = null;
      let currentNode = this.head;
      for (let i = 0; i < index; i++){
        previousNode = currentNode;
        currentNode = currentNode.next;
        previousNode.next = currentNode.next;
        this.length--;
        return currentNode;
      }
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



const setTable = new Set(); // only holds unique keys no value



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

// Merge Sort **

// Selection Sort

// Bubble Sort

// Insertion Sort

// Heap Sort


// SHOW EXAMPLES OF RECURSION