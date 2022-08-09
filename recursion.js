// recursive formula

function recursiveEx(example){
    // what is the base case? (so as to not go into stack overflow) or when can i no longer continue?

    // what is the smallest amount of work I can do in each iteration?
}


// what position are you in line?

function getMyPositionInLine(position){
    // what is the base case?
    // if there is no one in line, return position
    if (person.nextInLine == null){
        return position;
    };
    // what is the smallest amount of work I can do in each iteration?
    // if there is someone in line, return the position of the person in line + 1
    return getMyPositionInLine(position++);
}


// recursion showing how call stack works

// A, B and C are called in order, due to LIFO, the call stack starts with C and ends with A

function stringA(){
    // when executed, stringB is called and put onto call stack
    // has a dependency on B
    return 'hello' + stringB();
}

function stringB(){
    // has a dependency on C
    // when executed, stringC is called and put onto call stack
    return 'my' + stringC();
}

function stringC(){
    // nothing can be called from stack until after this function is finished executing
    return 'friends';
}

// causes stack overflow error due to infinite recursion

function stringD(){
    return stringD();
}

// string reversal

function reverseString(str){
    // what is the base case?
    // either one letter or no letters left to reverse (empty string is laziest option therefore ideal base case)
    if(str === ''){
        return '';
    }

    //what is the smallest amount of work I can do in each iteration?
    // pick a single character from the string and return it with the rest of the string reversed

    return reverseString(str.substring(1)) + str.charAt(0);
        // shrink problem space through going through 
        // concatenate the first character of the string with the rest of the string reversed
}

// palindrome checker

function isPalindrome(str){
    //base case - if string is empty, return true
    if(str === '' || str.length() === 1){
        return true;
    }
    // remove spaces, non-alphanumeric characters and make lowercase using regex
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // what is the smallest amount of work I can do in each iteration?
    // ignore spaces and non-alphanumeric characters and check if the first and last characters are the same
    if(str.charAt(0) === str.charAt(str.length - 1)){
        return isPalindrome(str.substring(1, str.length - 1));
    }
    
    // if characters are not the same, return false
    return false;
}

// decimal to binary

//binary code is dividng a number by 2 and adding the remainder to the result

function decimalToBinary(decimal,result){
    // base case - if number is 0, return 0
    if(num === 0){
        return result;
    }
    // what is the smallest amount of work I can do in each iteration?
    // make result equal to the remainder of the number divided by 2 and add it to the result
    // return in function but decimal is passed as a parameter using Math.floor to round down to the nearest integer as the number cannot be a decimal


    result = decimal%2 + result;

    return decimalToBinary(Math.floor(decimal/2), result);
}


