// array of questions user need to answer
var questions = [
    {
      "name": "Bulbasaur",
      "sprite": "https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png",
      "choices": ["Caterpie", "Charmander", "Bulbasaur", "Squirtle"]
    },
    {
      "name": "Chikorita",
      "sprite": "https://cdn.bulbagarden.net/upload/b/bf/152Chikorita.png",
      "choices": ["Chikorita", "Sentret", "Totodile", "Cyndaquil"]
    },
    {
      "name": "Treecko",
      "sprite": "https://cdn.bulbagarden.net/upload/2/2c/252Treecko.png",
      "choices": ["Torchic", "Mudkip", "Poochyena", "Treecko"]
    },
    {
      "name": "Turtwig",
      "sprite": "https://cdn.bulbagarden.net/upload/5/5c/387Turtwig.png",
      "choices": ["Turtwig", "Chimchar", "Piplup", "Starly"]
    },
    {
      "name": "Snivy",
      "sprite": "https://cdn.bulbagarden.net/upload/7/75/495Snivy.png",
      "choices": ["Oshawott", "Tepig", "Patrat", "Snivy"]
    },
    {
      "name": "Chespin",
      "sprite": "https://cdn.bulbagarden.net/upload/c/ca/650Chespin.png",
      "choices": ["Fennekin", "Bunnelby", "Chespin", "Froakie"]
    },
    {
      "name": "Rowlet",
      "sprite": "https://cdn.bulbagarden.net/upload/7/74/722Rowlet.png",
      "choices": ["Pikipek", "Rowlet", "Popplio", "Litten"]
    }
];

var currentQuestion = 0;
// counter for incorrect asnwers
var incorrect = 0;
// counter for correct answers
var correct = 0;
// 30 seconds countdown timer for each iteration of question
var seconds = 30;
// show user answer is correct
function check() {
    setTimeout(countdown);
    console.log("Correct");
    next()
}
// show user the correct answer if answer is wrong
function wrong() {
    setTimeout(countdown);
    console.log("Incorrect");
    next();
}
// play button to start game

  // go to question 1
function play() {
    //   console.log(questions[currentQuestion]["sprite"]);
    setInterval(countdown, 1000);
    document.getElementById("sprite").setAttribute("src", questions[currentQuestion]["sprite"]);
    document.getElementById("sprite").setAttribute("alt", questions[currentQuestion]["name"]);
    //   console.log(questions[currentQuestion]["choices"]);
    for (var i = 0; i < questions[currentQuestion]["choices"].length; i++) {
        var parent = document.getElementById("options");
        var child = document.createElement("button");
        child.setAttribute("value", questions[currentQuestion]["choices"][i]);
        child.setAttribute("type", "button");
        child.append(questions[currentQuestion]["choices"][i]);
        parent.append(child);
        if (child.getAttribute("value") === questions[currentQuestion]["name"]) {
            child.setAttribute("onclick", "check()");
        } else {
            child.setAttribute("onclick", "wrong()");
        }
    }
}

function next() {
    if (currentQuestion <= questions.length) {
        currentQuestion++;
        play();
    }
}

function countdown() {
    console.log(seconds);
    if (seconds >= 0) {
        seconds--;
    }
    else {
        console.log("Time's up!");
    }
}



    // if time is still going and user's answer is correct
      // timer stops
      // correct answer counter increments
      // tell user answer is correct
      // go to next question
    // if time is still going and user's answer is incorrect
      // timer stops
      // incorrect answer counter increments
      // tell user answer is wrong
      // show the correct answer
      // go to next question
    // if user does not have anser and time is up
      // say time's up
      // incorrect answer counter increments
      // show the correct answer
      // go to next question
  // if all questions have been iterated and answered
    // show tally of incorrect and correct answers
    // show option to play again
//   if user hit play again, repeat above steps