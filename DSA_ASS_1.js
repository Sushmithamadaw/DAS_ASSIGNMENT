// 1.
function findPairs(arr,target){
    let pairs=[];
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let currentSum=arr[left]+arr[right];
        if(currentSum===target){
            pairs.push([arr[left],arr[right]]);
            left++;
            right--;
        }
        else if(currentSum<target){
            left++;
        }
        else{
            right--;
        }
    }
    return pairs;
}
let nums=[2,4,5,7,8,9];
let targetSum=9;
let result=findPairs(nums,targetSum);
console.log(result);

// 2.
function reverseArrayInPlace(arr){
    let left=0;
    let right=arr.length-1;
    while(left,right){
        let temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;
        left++;
        right--;
    }
}
let nums=[1,2,3,4,5];
reverseArrayInPlace(nums);
console.log(nums);





// 3
function areRotations(str1, str2) {
    // Check if the lengths of both strings are the same
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Concatenate str1 with itself
    const concatenatedStr = str1 + str1;
  
    // Check if str2 is a substring of the concatenated string
    return concatenatedStr.includes(str2);
  }
  
  // Example usage:
  const string1 = "rotation";
  const string2 = "tionrota";
  
  if (areRotations(string1, string2)) {
    console.log(`${string1} and ${string2} are rotations of each other.`);
  } else {
    console.log(`${string1} and ${string2} are not rotations of each other.`);
  }
  



// 4
function firstNonRepeatedCharacter(str) {
  // Create an empty object to store character counts
  const charCount = {};

  // Iterate through the string to count the occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string to find the first non-repeated character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Return null if no non-repeated character is found
  return null;
}

// Example usage:
const inputString = "programming";

const result = firstNonRepeatedCharacter(inputString);

if (result !== null) {
  console.log(`The first non-repeated character is: ${result}`);
} else {
  console.log("All characters are repeated in the given string.");
}


// 5
// function towerOfHanoi(n, source, auxiliary, destination) {
//   if (n === 1) {
//     console.log(`Move disk 1 from ${source} to ${destination}`);
//     return;
//   }

//   towerOfHanoi(n - 1, source, destination, auxiliary);
//   console.log(`Move disk ${n} from ${source} to ${destination}`);
//   towerOfHanoi(n - 1, auxiliary, source, destination);
// }

// // Example usage:
// const numberOfDisks = 3;
// const sourcePeg = 'A';
// const auxiliaryPeg = 'B';
// const destinationPeg = 'C';

// towerOfHanoi(numberOfDisks, sourcePeg, auxiliaryPeg, destinationPeg);




// 6
function isOperator(char) {
  // Check if the character is an operator
  return ['+', '-', '*', '/'].includes(char);
}

function postfixToPrefix(postfixExpression) {
  const stack = [];

  for (const char of postfixExpression) {
    if (isOperator(char)) {
      // If the character is an operator, pop two operands from the stack
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      // Concatenate the operator before operands and push back to the stack
      const prefixExpression = char + operand1 + operand2;
      stack.push(prefixExpression);
    } else {
      // If the character is an operand, push it to the stack
      stack.push(char);
    }
  }

  // The final item in the stack is the prefix expression
  return stack.pop();
}

// Example usage:
const postfixExpression = "23+5*";

const prefixExpression = postfixToPrefix(postfixExpression);
console.log(`Postfix Expression: ${postfixExpression}`);
console.log(`Prefix Expression: ${prefixExpression}`);





function isOperator(char) {
  // Check if the character is an operator
  return ['+', '-', '*', '/'].includes(char);
}

function prefixToInfix(prefixExpression) {
  const stack = [];

  // Iterate through the expression in reverse order
  for (let i = prefixExpression.length - 1; i >= 0; i--) {
    const char = prefixExpression[i];

    if (isOperator(char)) {
      // If the character is an operator, pop two operands from the stack
      const operand1 = stack.pop();
      const operand2 = stack.pop();

      // Concatenate the operands and the operator within parentheses
      const infixExpression = `(${operand1}${char}${operand2})`;
      stack.push(infixExpression);
    } else {
      // If the character is an operand, push it to the stack
      stack.push(char);
    }
  }

  // The final item in the stack is the infix expression
  return stack.pop();
}

// Example usage:
const prefixExpression = "+*23*45";

const infixExpression = prefixToInfix(prefixExpression);
console.log(`Prefix Expression: ${prefixExpression}`);
console.log(`Infix Expression: ${infixExpression}`);










// 7
function areBracketsClosed(codeSnippet) {
  const stack = [];

  // Define a mapping of open and close brackets
  const bracketMap = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  // Iterate through each character in the code snippet
  for (const char of codeSnippet) {
    if (bracketMap.hasOwnProperty(char)) {
      // If it's an open bracket, push it onto the stack
      stack.push(char);
    } else if (Object.values(bracketMap).includes(char)) {
      // If it's a closing bracket, pop the last open bracket from the stack
      const lastOpenBracket = stack.pop();

      // Check if the corresponding open bracket matches the last open bracket
      if (bracketMap[lastOpenBracket] !== char) {
        return false; // Brackets are not closed properly
      }
    }
  }

  // If the stack is empty, all brackets are closed
  return stack.length === 0;
}

// Example usage:
const codeSnippet1 = "if (x > 0) { console.log('Positive'); }";
const codeSnippet2 = "function myFunction() { return [1, 2, 3]; }";

console.log(areBracketsClosed(codeSnippet1)); // Output: true
console.log(areBracketsClosed(codeSnippet2)); // Output: true





// 8
function reverseStack(inputStack) {
  const auxiliaryStack = [];

  // Pop all elements from the input stack and push them onto the auxiliary stack
  while (inputStack.length > 0) {
    auxiliaryStack.push(inputStack.pop());
  }

  // Pop all elements from the auxiliary stack and push them back onto the input stack
  while (auxiliaryStack.length > 0) {
    inputStack.push(auxiliaryStack.pop());
  }

  return inputStack;
}

// Example usage:
const originalStack = [1, 2, 3, 4, 5];
console.log("Original Stack:", originalStack);

const reversedStack = reverseStack([...originalStack]); // Create a copy to avoid modifying the original stack
console.log("Reversed Stack:", reversedStack);















// 9
// passing str by reference because be need to do changes in str 
// only not want to create any copy and when return it.
function the_helper(str) 
{

// stack which takw char input.
let s = [];

// we push all char in stack.
for (let i = 0; i < str.length; i++) {
	s.push(str.charAt(i));
}

// here we clear all char present in str. 
str = '';

// as stack is LIFO DS we push_back all char and our string is reverse now.
while (s.length > 0) {
	str += s.pop();
}

return str;
}

// string we want to reverse.
let str = 'GeeksQuiz';

// the function that make all necessary changes.
str = the_helper(str);

// finally return/output the reverse string
console.log('Reversed string is: ' + str);







// 10
class MinStack {
  constructor() {
    // Stack to store elements
    this.stack = [];
    // Stack to store the minimum element at each level
    this.minStack = [];
  }

  push(value) {
    // Push the value onto the main stack
    this.stack.push(value);

    // If the minStack is empty or the new value is smaller than the current minimum,
    // push the new value onto the minStack; otherwise, push the current minimum again.
    if (this.minStack.length === 0 || value < this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    } else {
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
  }

  pop() {
    // Pop the top element from both stacks
    this.stack.pop();
    this.minStack.pop();
  }

  getMin() {
    // Return the current minimum from the minStack
    return this.minStack[this.minStack.length - 1];
  }
}

// Example usage:
const minStack = new MinStack();

minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(8);
minStack.push(1);

console.log("Current Minimum:", minStack.getMin()); // Output: 1

minStack.pop();
console.log("Current Minimum:", minStack.getMin()); // Output: 2
