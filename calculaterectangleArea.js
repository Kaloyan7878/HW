//TASK: да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени като пропъртита на обект дължина и ширина:

// ---> YOUR CODE HERE <---
function calcRectangleArea(width, height)
{
    return width*height;
}
// TEST:
let rectangle = {
	width: 6,
	height: 3
};
let area = calcRectangleArea(rectangle.width, rectangle.height);

console.log(`The area of rectangle is: ${area}`);

// expected result:
// The area of rectangle is: 18
