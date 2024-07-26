let students = ["Ivan", "Pesho", "Maria"];
let scores = [4, 5, 6];
function getHighestScoreIndex(arr, arr1)
{
    let max = arr[0];
    let max1 = arr1[0];
    for (let i = 1; i < arr.length; i++)
    {
        if (arr[i] > max)
            {
                max = arr[i];
                max1 = arr1[i];
            }
    }
    console.log(`${max1} has the highest score: ${max}`)
}
getHighestScoreIndex(scores, students);
// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.
// ---> YOUR CODE HERE <---

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---

// expected output
// Maria has the higest score: 6


