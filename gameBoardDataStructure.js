// целта е да представим в JavaScript двумерна дъска за игра, (например - "Морски шах"), която в последствие ще можем лесно да променяме за да отразим текущото състояние на играта.

//   -----------
//  | 0 | 0 | 0 |
//  -------------
//  | 0 | 0 | 0 |
//  -------------
//  | 0 | x | 0 |
//   -----------
//      фиг.1

// Вариант 1: едномерен масив:
// можем да използваме едномерен масив, в който полетата от дъската са представени последователно.
// Тоест, дъската от фиг.1 би изглеждала така:
let board1d = [ 0, 0, 0, 0, 0, 0, 0, 'x', 0 ];
	           // 1  2  3  4  5  6  7   8   9

// Вариант 2: двумерен масив:
// по-интутивен, тъй като следва реалната двумерна структура на дъската:
//
//     j: 0  1   2
//  i: ------------
//   0 | 0 | 0 | 0| -> row1 ( i = 0)
//   - -----------
//   1 | 0 | 0 | 0| -> row2 ( i = 1)
//   - -----------
//   2 | 1 | x | 0| -> row3 ( i = 2)
//     ------------
//
let board2d = [
	[ 0,  0 , 0 ],
	[ 0,  0 , 0 ],
	[ 0, 'x', 0 ]
];



// TASK:
// дефинирайте функция setX( i, j), с два параметъра:
// 		i    : индекса на реда (започва от 0)
// 		j    : индекса на колона (започва от 0),
// която ще запише 'x' в дадената клетка на board2d

// Например: setX(0, 2); трябва да промени дъската, така че да изглежда така:
// [
// 	[ 0, 0, x],
// 	[ 0, 0, 0],
// 	[ 0, x, 0]
// ];

// ---> YOUR CODE HERE <---
function setX(m,n)
{
    for (let i=0;i<board2d.length;i++)
    {
        for (let j=0;j<board2d[i].length;j++)
        {
            if(m==i && n==j) board2d[i][j] = "X";
        }
    }
    return board2d;
}
setX(1,1);
// TEST
// извикване на функцията setX()
//setX(0, 1);
//setX(2, 0);

// За да видите текущото състояние на дъската за игра, след извикването на setX(0, 1) използвайте функцията:
//showConsoleBoard( board2d );


// дефиниция на функцията showConsoleBoard()"
function showConsoleBoard( board ){	
	let boardStr = "";
	for (let i = 0; i < board.length; i++) {
		boardStr += "|";		

		for (let j = 0; j < board[i].length; j++) {
			boardStr += board[i][j] + "|";
		}
		boardStr += "\n";
	}

	console.log(boardStr);
}
showConsoleBoard(board2d);