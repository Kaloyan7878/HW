// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---
function SumEven2DimArrayElements(array)
{
    let sum = 0;
    for (let i = 0; i < array[0].length; i++)
    {
        if(array[0][i]%2==0) sum=sum+array[0][i];
        if(array[1][i]%2==0) sum=sum+array[1][i];
    }
    return sum;
}
// TEST:
let arr = [
	[1,2,3],
	[4,5,6]
];

let sum = SumEven2DimArrayElements(arr);
console.log(sum);

// expected output: 12
