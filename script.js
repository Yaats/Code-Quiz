var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "JavaScript is the same as Java.",
        choices: ["True", "False", "Maybe", "Why not?"],
        answer: "False"
    },
    {
        title: "Where is the correct place to insert a JavaScript?",
        choices: ["The <head> section", "The <bed> section", "Both <head> and <bed> are correct", "The <body> section"],
        answer: "The <body> section"
    },
    {
        title: "The external JavaScript file must contain the script tag.",
        choices: ["True", "False", "Maybe", "Why not?"],
        answer: "False"
    },
    {
        title: "How do you round the number 7.25, to the nearest integer?",
        choices: ["round(7.25)", "rnd(7.25)", "Math.rnd(7.25)", "Math.round(7.25)"],
        answer: "Math.round(7.25)"
    }
];



// NOOOOOOOOOOT WOOOOOOOOORKING
// NOOOOOOOOOOT WOOOOOOOOORKING
// NOOOOOOOOOOT WOOOOOOOOORKING

// for (let question of questions){

//     $('body').append(`<div class="container-quiz container">
//     <h1> ${question.title} </h1></div>`)

//     $('.container-quiz').append(`<p> ${question.choices} </p>`)
// };

// NOOOOOOOOOOT WOOOOOOOOORKING
// NOOOOOOOOOOT WOOOOOOOOORKING
// NOOOOOOOOOOT WOOOOOOOOORKING


// $('#start').click(function () {
//     $('#main-page').attr("style", "display: none");
//     $('#page-1').append(`<h1> ${questions[0].title} </h1>`);
//     $('#page-1').append(`<input type="checkbox" value="${questions[0].choices[0]}">${questions[0].choices[0]}</br>`);
//     $('#page-1').append(`<input type="checkbox" value="${questions[0].choices[1]}">${questions[0].choices[1]}</br>`);
//     $('#page-1').append(`<input type="checkbox" value="${questions[0].choices[2]}">${questions[0].choices[2]}</br>`);
//     $('#page-1').append(`<input type="checkbox" value="${questions[0].choices[3]}">${questions[0].choices[3]}</br>`);
//     $('#page-1').append('<button id="next-1"> NEXT </button>')
// })



// NOOOOOOOOOOT WOOOOOOOOORKING
// NOOOOOOOOOOT WOOOOOOOOORKING
// NOOOOOOOOOOT WOOOOOOOOORKING

// $('#next-1').click(function () {
//     $('#page-1').attr("style", "display: none");
//     console.log("lourd");

// })

// NOOOOOOOOOOT WOOOOOOOOORKING
// NOOOOOOOOOOT WOOOOOOOOORKING
// NOOOOOOOOOOT WOOOOOOOOORKING



$('#page-1').append(`<h1> ${questions[0].title} </h1>`);
$('#page-1').append(`<input type="checkbox" value="${questions[0].choices[0]}">${questions[0].choices[0]}</br>`);
$('#page-1').append(`<input type="checkbox" value="${questions[0].choices[1]}">${questions[0].choices[1]}</br>`);
$('#page-1').append(`<input type="checkbox" value="${questions[0].choices[2]}">${questions[0].choices[2]}</br>`);
$('#page-1').append(`<input type="checkbox" value="${questions[0].choices[3]}">${questions[0].choices[3]}</br>`);



$('#page-2').append(`<h1> ${questions[1].title} </h1>`);
$('#page-2').append(`<input type="checkbox" value="${questions[1].choices[0]}">${questions[1].choices[0]}</br>`);
$('#page-2').append(`<input type="checkbox" value="${questions[1].choices[1]}">${questions[1].choices[1]}</br>`);
$('#page-2').append(`<input type="checkbox" value="${questions[1].choices[2]}">${questions[1].choices[2]}</br>`);
$('#page-2').append(`<input type="checkbox" value="${questions[1].choices[3]}">${questions[1].choices[3]}</br>`);



$('#page-3').append(`<h1> ${questions[2].title} </h1>`);
$('#page-3').append(`<input type="checkbox" value="${questions[2].choices[0]}">${questions[2].choices[0]}</br>`);
$('#page-3').append(`<input type="checkbox" value="${questions[2].choices[1]}">${questions[2].choices[1]}</br>`);
$('#page-3').append(`<input type="checkbox" value="${questions[2].choices[2]}">${questions[2].choices[2]}</br>`);
$('#page-3').append(`<input type="checkbox" value="${questions[2].choices[3]}">${questions[2].choices[3]}</br>`);



$('#page-4').append(`<h1> ${questions[3].title} </h1>`);
$('#page-4').append(`<input type="checkbox" value="${questions[3].choices[0]}">${questions[3].choices[0]}</br>`);
$('#page-4').append(`<input type="checkbox" value="${questions[3].choices[1]}">${questions[3].choices[1]}</br>`);
$('#page-4').append(`<input type="checkbox" value="${questions[3].choices[2]}">${questions[3].choices[2]}</br>`);
$('#page-4').append(`<input type="checkbox" value="${questions[3].choices[3]}">${questions[3].choices[3]}</br>`);



$('#page-5').append(`<h1> ${questions[4].title} </h1>`);
$('#page-5').append(`<input type="checkbox" value="${questions[4].choices[0]}">${questions[4].choices[0]}</br>`);
$('#page-5').append(`<input type="checkbox" value="${questions[4].choices[1]}">${questions[4].choices[1]}</br>`);
$('#page-5').append(`<input type="checkbox" value="${questions[4].choices[2]}">${questions[4].choices[2]}</br>`);
$('#page-5').append(`<input type="checkbox" value="${questions[4].choices[3]}">${questions[4].choices[3]}</br>`);



$('#page-6').append(`<h1> ${questions[5].title} </h1>`);
$('#page-6').append(`<input type="checkbox" value="${questions[5].choices[0]}">${questions[5].choices[0]}</br>`);
$('#page-6').append(`<input type="checkbox" value="${questions[5].choices[1]}">${questions[5].choices[1]}</br>`);
$('#page-6').append(`<input type="checkbox" value="${questions[5].choices[2]}">${questions[5].choices[2]}</br>`);
$('#page-6').append(`<input type="checkbox" value="${questions[5].choices[3]}">${questions[5].choices[3]}</br>`);




$('#submit').click(function () {
    console.log('lourd');
})