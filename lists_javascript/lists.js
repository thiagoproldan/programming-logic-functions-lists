// Lists in JavaScript

// An array in JavaScript is a data structure that allows you to store and organize multiple values ​​into a single variable. 
// Values ​​in an array can be of any data type, such as numbers, strings, objects, other arrays, and so on. 
//Arrays in JavaScript are indexed, which means that each value within them is associated with a numeric index, generally starting from index 0.

// Creating an array
// You can create an array in JavaScript by enclosing the values ​​you want to store in square brackets ([]).
let fruits = ['apple', 'banana', 'orange', 'mango'];

// Accessing elements in an array
// You can access elements in an array using their index. The index of the first element in an array is 0, the index of the second element is 1, and so on.

console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: orange
console.log(fruits[3]); // Output: mango

// Adding elements to an array
// You can add elements to an array using the push() method. The push() method adds elements to the end of an array.

fruits.push('grapes');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'mango', 'grapes']

// Removing elements from an array
// You can remove elements from an array using the pop() method. The pop() method removes the last element from an array.

fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'mango']

// Updating elements in an array
// You can update elements in an array by assigning a new value to the element using its index.

fruits[1] = 'kiwi';
console.log(fruits); // Output: ['apple', 'kiwi', 'orange', 'mango']

// Iterating over an array
// You can iterate over the elements in an array using a for loop.

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Languages with array support (JavaScript, Python, Ruby, PHP, Java, C#, Swift, Kotlin, etc.) have built-in methods to add, remove, and update elements in an array.

// Other languages ​​also support the use of arrays or similar data structures to store collections of values. Learning about arrays is important because they play a fundamental role in developing software applications.

// Lists or Arrays provide an efficient way to store and access sets of data, allowing programmers to organize information logically and manipulate that data effectively.

// Having the knowledge of how to work with arrays, it is possible to create more powerful algorithms, solve programming problems more efficiently and create more dynamic and interactive applications.

