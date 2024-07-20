// Array of questions
let questions = [
    "What is the capital of France?",
    "Which language is used for Front-end Web development?",
    "What does CSS stand for?"
];

// Array of options for each question
let options = [
    ["Berlin", "Madrid", "Paris", "Lisbon"],
    ["Python", "JavaScript", "C++", "Java"],
    ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"]
];

// Array of correct answers
let answers = [
    "Paris",
    "JavaScript",
    "Cascading Style Sheets"
];
/* ----------------------------- YOUR CODE HERE ----------------------------- */
for (let i = 0;i < questions.length;i++)
{
    console.log(questions[i] + ` (${answers[i]})\n \t${options[i]}`);
}