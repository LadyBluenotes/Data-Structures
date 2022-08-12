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

const hashTable = new Map(); // can also create using classe
const hashSet = new Set(); // only holds keys no values

hashTable.set('key', 'value')
let getKey = hashTable.get('key') // returns key
let hasKey = hashTable.has('key') // returns boolean
let sizeTable = hashTable.size // returns number of keys
let entriesInTable = hashTable.entries() // returns all entries
let getAllKeys = hashTable.keys() // returns all keys
let getAllValues = hashTable.values() // returns all values

hashTable.delete('key') // removes key
hashTable.clear() // deletes all items

// Graph


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
    let mid = start + Math.floor((last - first) / 2);
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

// Depth First Search

// Breadth First Search



// Sorting Algorithms

// Quick Sort **

// Merge Sort **

// Selection Sort

// Bubble Sort

// Insertion Sort

// Heap Sort


// SHOW EXAMPLES OF RECURSION