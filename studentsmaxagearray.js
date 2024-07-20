let students = [
    ["male",24,"Ivan","Ivanov"],
    ["female",22,"Maria","Petrova"],
    ["male",18,"Georgi","Georgiev"],
    ["male",21,"Nikolai","Nikolov"]
];
let maxage = students[0][1];
let oldeststudent;
for(let i = 0;i < students.length;i++)
{
    const studentsage = students[i][1]; 
    if (studentsage>=maxage) 
    {
        maxage = studentsage;
        oldeststudent = students[i];
    }
}
console.log(`The oldest student is ${oldeststudent[2]} ${oldeststudent[3]}. He is ${oldeststudent[1]} years old.`);

let minAge = students[0][1];

let youngestStudent;

for (let i = 0; i < students.length; i++) {
    const studentAge = students[i][1];

    if( studentAge <= minAge){
        minAge = studentAge;
        youngestStudent = students[i];
    }
}

console.log(`The youngest student is ${youngestStudent[2]} ${youngestStudent[3]}. He is ${youngestStudent[1]} years old.`);