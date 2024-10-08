var students = [
    [
        'Pesho',
        ['math', 5],
        ['physics', 4],
        ['music', 6],
    ],
    [
        'Maria',
        ['math', 2],
        ['physics', 5],
        ['music', 3],
    ],
    [
        'George',
        ['math', 2],
        ['physics', 5],
        ['music', 4],
    ]
];

// Логваме оценките на всеки студент за всеки предмет:
for(var i = 0; i<students.length; i++){
    console.log(`${students[i][0]} scores:`);
    for(var j = 1; j<students[i].length; j++)
    {
        console.log(`\t${students[i][j][1]} in ${students[i][j][0]}`);       
    }
}
console.log(` `);
let maxgrade = students[0][1][1];
let highestmark;
for(var i = 0; i<students.length; i++)
{
    for(var j = 1; j<students[i].length; j++){
        const studentsmark = students[i][j][1];
        if (studentsmark>=maxgrade)
        {
            maxgrade = studentsmark;
            highestmark = students[i][j];
            console.log(highestmark+"!");
        }
    }
    console.log(` `);
    console.log(`\t${students[i][0]} is best in ${highestmark[0]}(${highestmark[1]})`);
    highestmark = 0;
}
// TASK: напишете кода, който да намира и изписва в конзолата най-високата оценка и съответния предмет за даден студент.		
// >>>>>>> your code starts here >>>>>>>


// <<<<<<< your code ends here <<<<<<<
// Очакван резултат: 
// Pesho is best in music (6)
// Maria is best in math (6)
// George is best in physics (4)