// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---
function findMaxEven(arr)
{
    let max = numbers[0];
    for (let i = 1; i < arr.length; i++)
    {
        if (arr[i] > max && arr[i]%2==0) max = arr[i];
    }
    return max;
}
// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
console.log(`The max of ${numbers} is ${findMaxEven(numbers)}`);