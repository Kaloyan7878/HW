// TASK: Да се дефинира функция, която приема 2 масива и връща масив, чиито елементи са сумата от елементите на двата масива (елемент по елемент).

// YOUR CODE HERE
function sumArrays(array1, array2)
    {
        let array = [];
        for (let i = 0; i < array1.length; i++)
        {
            array[i]=array1[i]+array2[i];
        }
        return array;
    }
// TEST:
console.log(sumArrays([1, 2, 3], [4, 5, 6]));
// OUTPUT:
// [ 5, 7, 9 ]