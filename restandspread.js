// ---------------------------------- Task 1 ---------------------------------- //
    /* DESCRIPTION:
    Write a function named `combineArrays`, using the Arrow Syntax that should take any number of arrays as arguments
    and return a new array that contains all elements from the provided arrays.

    You can use the concat array method (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
    to combine arrays.

    Use the spread operator to work with variable number of arguemnts in Arrow Function.
    */
    // YOUR CODE HERE
    combineArrays = (x,y)=> {
     const z=x.concat(y)
        
    }
    // Define combineArrays function using Arrow Syntax

    // TEST
     const array1 = [1, 2, 3];
     const array2 = [4, 5];
     const array3 = [6, 7, 8];

     console.log(combineArrays(array1, array3));  // Expected output: [1, 2, 3, 6, 7, 8]
     console.log(combineArrays(array1, array2, array3));  // Expected output: [1, 2, 3, 4, 5, 6, 7, 8]

// ---------------------------------- Task 2 ---------------------------------- //
    /* DESCRIPTION:
    Write a function named `swap` that takes an object with properties `a` and `b`
    and swaps their values using destructuring assignment.
    */
    const obj = { 
        a: 1, 
        b: 2
     };
    // Define swap function
    // TEST
    //swap(obj);  // Expected output: { a: 2, b: 1 }
    // YOUR CODE HERE
     function swap(obj)
     {
        let {a,b} = obj
        let c = a
        obj.a=b
        obj.b=c
        return obj 
     }
    console.log(swap(obj))
// ---------------------------------- Task 3 ---------------------------------- //
    /* DESCRIPTION:
    Write a function named `createPerson` that takes two arguments: `name` and `age`,
    and returns an object using shorthand property names.
    Add a method `greet` using the new method definition syntax that returns a string
    greeting the person by their name.
    */
    // YOUR CODE HERE
    function createPerson(name, age) {
        let obj = {name,age,
            "greet": function() {
                return `Hello, my name is ${name}`
            }
        }
        obj.name = name
        obj.age = age
        return obj
    }
    // Define createPerson function


    // TEST
     const person = createPerson('Ada Byron', 30);
    console.log(person.greet());  // Expected output: "Hello, my name is Ada Byron!"

// ---------------------------------- Task 4 ---------------------------------- //
    /* DESCRIPTION:
    Write a function named `countVowels` that takes a string as an argument and
    returns the number of vowels (a, e, i, o, u) in the string using the `for...of` statement.
    You can use the includes array method (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) to find whether an array includes a certain value among its elements.
    */
    // YOUR CODE HERE
    //const vowels = [`a`, `e`, `i`, `o`, `u`]
    function countVowels(x)
    {
        let count = 0
        const vowels = [`a`, `e`, `i`, `o`, `u`]
        for (const element of x) {
            if(vowels.includes(element)) {               
                count+=1
            }
        }
        return count
    }
    // Define countVowels function
    // TEST
    const text = 'Hello, World!'
    console.log(countVowels(text))  // Expected output: 3