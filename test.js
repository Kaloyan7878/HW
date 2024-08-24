// ---------------------------------- Task 1 ---------------------------------- //
    /* DESCRIPTION:
    Write a function named `combineArrays`, using the Arrow Syntax that should take any number of arrays as arguments
    and return a new array that contains all elements from the provided arrays.

    You can use the concat array method (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
    to combine arrays.

    Use the spread operator to work with variable number of arguemnts in Arrow Function.
    */
    // YOUR CODE HERE
    combineArrays = (...x)=> {
        const array = x.concat           
       }
       // Define combineArrays function using Arrow Syntax
   
       // TEST
        const array1 = [1, 2, 3];
        const array2 = [4, 5];
        const array3 = [6, 7, 8];
   
        console.log(combineArrays(array1, array3));  // Expected output: [1, 2, 3, 6, 7, 8]
        console.log(combineArrays(array1, array2, array3));  // Expected output: [1, 2, 3, 4, 5, 6, 7, 8]