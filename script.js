// $(document).ready(function(){

  // array of questions user need to answer
  var questions = [
    {
      name: "Bulbasaur",
      sprite: "https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png",
      choices: ["Caterpie", "Charmander", "Squirtle", "Bulbasaur"]
    },
    {
      name: "Cyndaquil",
      sprite: "https://cdn.bulbagarden.net/upload/9/9b/155Cyndaquil.png",
      choices: ["Sentret", "Chikorita", "Cyndaquil", "Totodile"]
    },
    {
      name: "Mudkip",
      sprite: "https://cdn.bulbagarden.net/upload/6/60/258Mudkip.png",
      choices: ["Mudkip", "Treecko", "Torchic", "Poochyena"]
    },
    {
      name: "Turtwig",
      sprite: "https://cdn.bulbagarden.net/upload/5/5c/387Turtwig.png",
      choices: ["Turtwig", "Starly", "Chimchar", "Piplup"]
    },
    {
      name: "Tepig",
      sprite: "https://cdn.bulbagarden.net/upload/5/5b/498Tepig.png",
      choices: ["Snivy", "Tepig", "Patrat", "Oshawott"]
    },
    {
      name: "Froakie",
      sprite: "https://cdn.bulbagarden.net/upload/1/18/656Froakie.png",
      choices: ["Fennekin", "Froakie", "Chespin", "	Greninja"]
    },
    {
      name: "Rowlet",
      sprite: "https://cdn.bulbagarden.net/upload/7/74/722Rowlet.png",
      choices: ["Pikipek", "Litten", "Popplio", "Rowlet"]
    },
    {
      name: "Scorbunny",
      sprite: "https://cdn.bulbagarden.net/upload/c/cc/Scorbunny.png",
      choices: ["Grookey", "Sobble", "Gossifleur", "Scorbunny"]
    },
    {
      name: "Squirtle",
      sprite: "https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png",
      choices: ["Charmander", "Bulbasaur", "Squirtle", "Caterpie"]
    },
    {
      name: "Chikorita",
      sprite: "https://cdn.bulbagarden.net/upload/b/bf/152Chikorita.png",
      choices: ["Totodile", "Chikorita", "Sentret", "Cyndaquil"]
    },
    {
      name: "Torchic",
      sprite: "https://cdn.bulbagarden.net/upload/9/91/255Torchic.png",
      choices: ["Torchic", "Treecko", "Mudkip", "Poochyena"]
    },
    {
      name: "Piplup",
      sprite: "https://cdn.bulbagarden.net/upload/b/b1/393Piplup.png",
      choices: ["Chimchar", "Starly", "Turtwig", "Piplup"]
    },
    {
      name: "Snivy",
      sprite: "https://cdn.bulbagarden.net/upload/7/75/495Snivy.png",
      choices: ["Patrat", "Tepig", "Oshawott", "Snivy"]
    },
    {
      name: "Fennekin",
      sprite: "https://cdn.bulbagarden.net/upload/3/3d/653Fennekin.png",
      choices: ["Froakie", "Fennekin", "Greninja", "Chespin"]
    },
    {
      name: "Popplio",
      sprite: "https://cdn.bulbagarden.net/upload/d/d8/728Popplio.png",
      choices: ["Pikipek", "Litten", "Popplio", "Rowlet"]
    },
    {
      name: "Grookeyo",
      sprite: "https://cdn.bulbagarden.net/upload/7/7a/Grookey.png",
      choices: ["Grookey", "Scorbunny", "Sobble", "Gossifleur"]
    },
    {
      name: "Charmander",
      sprite: "https://cdn.bulbagarden.net/upload/7/73/004Charmander.png",
      choices: ["Bulbasaur", "Caterpie", "Squirtle", "Charmander"]
    },
    {
      name: "Totodile",
      sprite: "https://cdn.bulbagarden.net/upload/d/df/158Totodile.png",
      choices: ["Chikorita", "Sentret", "Totodile", "Cyndaquil"]
    },
    {
      name: "Treecko",
      sprite: "https://cdn.bulbagarden.net/upload/2/2c/252Treecko.png",
      choices: ["Treecko", "Mudkip", "Poochyena", "Torchic"]
    },
    {
      name: "Chimchar",
      sprite: "https://cdn.bulbagarden.net/upload/7/76/390Chimchar.png",
      choices: ["Starly", "Turtwig", "Piplup", "Chimchar"]
    },
    {
      name: "Oshawott",
      sprite: "https://cdn.bulbagarden.net/upload/3/3b/501Oshawott.png",
      choices: ["Oshawott", "Snivy", "Tepig", "Patrat"]
    },
    {
      name: "Chespin",
      sprite: "https://cdn.bulbagarden.net/upload/c/ca/650Chespin.png",
      choices: ["Chespin", "Greninja", "Froakie", "Fennekin"]
    },
    {
      name: "Litten",
      sprite: "https://cdn.bulbagarden.net/upload/0/0e/725Litten.png",
      choices: ["Litten", "Pikipek", "Popplio", "Rowlet"]
    },
    {
      name: "Sobble",
      sprite: "https://cdn.bulbagarden.net/upload/0/0c/Sobble.png",
      choices: ["Scorbunny", "Gossifleur", "Sobble", "Grookey"]
    }
  ];

  var currentQuestion = 0;
  // counter for incorrect asnwers
  var incorrect = 0;
  var incorrectCount = document.getElementById("incorrect")
  incorrectCount.innerHTML = incorrect;
  // counter for correct answers
  var correct = 0;
  var correctCount = document.getElementById("correct")
  correctCount.innerHTML = correct;
  // 30 seconds countdown timer for each iteration of question
  var seconds = 30;
  // show user answer is correct
  function check() {
    $("#options button").remove();
    correct++;
    correctCount.innerHTML = correct;
    // setTimeout(countdown);
    // console.log("Correct");
    next();
  }
  // show user the correct answer if answer is wrong
  function wrong() {
    $("#options button").remove();
    incorrect++;
    incorrectCount.innerHTML = incorrect;
    // setTimeout(countdown);
    // console.log("Incorrect");
    next();
  }
  // play button to start game

  // go to question 1
  function play() {
    //   console.log(questions[currentQuestion]["sprite"]);
    // setInterval(countdown, 1000);
    document
      .getElementById("sprite")
      .setAttribute("src", questions[currentQuestion]["sprite"]);
    document
      .getElementById("sprite")
      .setAttribute("alt", questions[currentQuestion]["name"]);
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
    else {
      var conclusion = document.getElementById("conclusion");
      conclusion.innerHTML = "END OFF GAME";
    }
  }

  function countdown() {
    console.log(seconds);
    if (seconds >= 0) {
      seconds--;
    } else {
      console.log("Time's up!");
    }
  }

  function reset() {
    currentQuestion = 0;
      incorrect = 0;
      correct = 0;
  }


  // }); // end of document.ready function