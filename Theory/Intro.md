# Data Structure (Organize Data Effectively)
- Organized way of storing data for use by computer process.
- Also a pattern of collecting and organizing data for performing various operations correctly and efficiently.
- In picking an implementation, you must provide some insight into the relationship of the data as well as making sure the data is easily accessible.
- The best data structures consume minimal resources while storing data in a meaningful way for various operations.

Programs have built in ways of organizing and working with data:
    - Variables
    - Conditionals
    - Iterators
    - Functions
    - Scopes
    - Arrays
    - Objects

// Array Implementation
let user = ['Obosi', 'Philip', 200, 'Nigeria', 'Frontend', ['English', 'Igbo','French']]

// Object Implementation
let user = {
    firstName: 'Philip',
    lastName: 'Obosi',
    contributions: 200,
    country: 'Nigeria',
    role: 'Frontend',
    languagesSpoken: ['English', 'Igbo','French']
}

# Variables and Scope
- Let and Const are used to declare variables within the block of code where they exist.
- Let allows the variable to be mutable.

# Arrays
- Linear collections of elements that are accessed through indices.
- Other way of putting it: a container that is used to hold a list of items usually of the same type.

# Objects
- Used to store a collection of related data or functionality in the form of key-value pairs.
- More complex than arrays as they hold more complex entities usually of varying types.

# Algorithms (Manipulate Data Effectively)
- A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.
- The breakdown of the process into actionable steps is called pseudocode.
    Example with a library:
        Walk up to the shelf
        Pick up the first book
        Check if it matches what you’re looking for
        If it does, yayyyyy!!! (that was quick)
        If it doesn't, you drop the book
        Pick up another and check again.
        Process is repeated until desired book is found.
- The optimal solution will be one that consumes minimal energy and takes little time to complete the task.
- Algorithms are just like Granny’s recipe book that contains all the steps required to make that special delicacy.
    - More technical definition: well-defined computational procedures that takes some value, or set of values, as input and produces some value, or set of values as output.
- The main properties of an algorithm:
    - Input: must possess 0 or more well-defined inputs supplied externally to the algorithm
    - Output: algorithm should have 1 or more well-defined outputs as desired.
    - Correctness: Every step of the algorithm must generate a correct output.
    - Definiteness: Should be clear and unambiguous, thus every step of the algorithm should be clear and well defined.
    - Finiteness: Should have a finite number of steps that must be carried out to achieve the task at hand.
- There can be multiple ways of solving a problem, but efficiency is key and determined through:
    - Time complexity: execution time of the operation
    - Space complexity: memory usage of an operation
- 2 stages that algorithm efficiency is evaluated, with one being theoretical and other being practical.
    - Priori Analysis - Theoretical; Factors such as processing speed are assumed to be constant and not considered having any effect on algorithmic implementation.
        - Makes use of asymptotic notation (Big O Notation; standard way of expressing an algorithm in terms of time and space complexity).
        - Known as upper bound of algorithm or worst case - tells us a certain function will never exceed or take more than a specific time to execute irrespective of the value of the input.
            - Considered effective way of approaching analysis when, in worst case, input is very large.
    - Posteriori Analysis: Practical; Carried out through implementing algorithm using selected programming language and tested while observing time and memory consumed.

# Why use DSA?
- Most apps are data-driven and tend to require:
    - Storing data
    - Accepting data
    - Processing data
    - Accepting data
- The need to handle complex data results in the creation of Abstract Data Types(ADT) which are designed to create logical descriptions of how data is viewed and the operations that can be carried out with them.
    - Data encapsulation: ADTs allow us to handle data more efficiently so that we worry more for what data represents and not how it is constructed.
        - Examples: Array, List, Queue, Set, Stack, Table, Tree, Vectors


# Recursion
- Programming technique whose intention is to reduce the problem into smaller instances of the same problem until it is completely solved.
- Write a function that calls itself until solution is met.
- Must have a terminal case that ends the recursion or the function will continue in an endless loop.
- Continues to break down problem into smaller chunks until terminal case is reached which terminates the condition or else it will continue to re-execute the function on what is left.

# Functions
- Named sections of code that perform a specific task.
- May accept values as parameters used for internal computation.
- When called, the values are passed into them at the time are known as arguments.

# Regular Expression (ReGex)
- Help us find patterns of characters / character combinations within strings.
Help us do way more remarkable things (filter text, search, replace functionality, data validation, etc).
- Usually defined within a pair of slashes ending - sometimes ending with letters.
    - g = global search (will not start over from beginning but continue search from end of previous match)
    - i = stands for case insensitive approach which makes the whole expression case-insensitive.

# Character Mapping
- Objects come in handy - loop through text and add each character to a character map object as a key and the number of times it exists as a value.

# Imperative Style Programming
- Specifies how things get done, step-by-step.
- Ex: when adding an array of numbers and returning the sum, you use a forloop that goes over each element and cumulatively adds each element to an accumulator until final sum is reached.

# Declarative Style Programming
- Allows you to specify what should be done rather than how (declare) and aren't concerned with how it gets done.
- Ex: using .reduce() on the array to reduce every element to a final value by reducing the sum within the callback.

# Queue
- First in first out data structure.

# Stack
- Last in first out data structure.