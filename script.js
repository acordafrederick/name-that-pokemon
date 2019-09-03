$("#play").hide();

$(document).ready(function() {
  var questions = [
    {
      name: "Blacephalon",
      sprite: "https://cdn.bulbagarden.net/upload/a/a5/806Blacephalon.png",
      choices: ["Blacephalon", "Reshiram", "Chandelure", "Heatmor"]
    },
    {
      name: "Buzzwole",
      sprite: "https://cdn.bulbagarden.net/upload/f/fa/794Buzzwole.png",
      choices: ["Scizor", "Buzzwole", "	Shelmet", "Scyther"]
    },
    {
      name: "Celesteela",
      sprite: "https://cdn.bulbagarden.net/upload/8/89/797Celesteela.png",
      choices: ["Bronzong", "Skarmory", "	Metagross", "Celesteela"]
    },
    {
      name: "Guzzlord",
      sprite: "https://cdn.bulbagarden.net/upload/4/47/799Guzzlord.png",
      choices: ["Darkrai", "Yveltal", "Zoroark", "Guzzlord"]
    },
    {
      name: "Kartana",
      sprite: "https://cdn.bulbagarden.net/upload/f/fe/798Kartana.png",
      choices: ["Cacnea", "Sceptile", "Kartana", "Fomantis"]
    },
    {
      name: "Naganadel",
      sprite: "https://cdn.bulbagarden.net/upload/d/de/804Naganadel.png",
      choices: ["Rayquaza", "Druddigon", "Naganadel", "Haxorus"]
    },
    {
      name: "Nihilego",
      sprite: "https://cdn.bulbagarden.net/upload/2/2c/793Nihilego.png",
      choices: ["Nihilego", "Trubbish", "Grimer", "Amoonguss"]
    },
    {
      name: "Xurkitree",
      sprite: "https://cdn.bulbagarden.net/upload/d/d2/796Xurkitree.png",
      choices: ["Electivire", "Zeraora", "Xurkitree", "Eelektross"]
    },
    {
      name: "Stakatak",
      sprite: "https://cdn.bulbagarden.net/upload/2/27/805Stakataka.png",
      choices: ["Magnezone", "Shieldon", "Magearna", "Stakatak"]
    },
    {
      name: "Poipole",
      sprite: "https://cdn.bulbagarden.net/upload/e/e5/803Poipole.png",
      choices: ["Garbodor", "Poipole", "Ariados", "Toxapex"]
    },
    {
      name: "Pheromosa",
      sprite: "https://cdn.bulbagarden.net/upload/c/c7/795Pheromosa.png",
      choices: ["Masquerain", "Pheromosa", "Ledyba", "Karrablast"]
    }
  ];

  var checkCount = 0;
  var wrongCount = 0;
  var currentQuestion = 0;
  var seconds = 30;

  setTimeout(function() {
    $("#play").show();
  }, 5000);

  $("#play").click(function() {
    $(this).hide();
    play();
  });

  function play() {
    $("#prompt").text(`Who's That Pokemon?`);
    // set img to current question
    $("img").attr({
      src: questions[currentQuestion]["sprite"],
      alt: questions[currentQuestion]["name"]
    });
    for (var i = 0; i < questions[currentQuestion]["choices"].length; i++) {
      // loop thru questions.choices, populate to screen as buttons
      $("#options").append(
        `<button value="${
          questions[currentQuestion]["choices"][i]
        }" type="button">${questions[currentQuestion]["choices"][i]}</button>`
      );
    }
    $("#options button").each(function() {
      // set click functions for buttons
      $(this).click(function() {
        if ($(this).attr("value") === questions[currentQuestion]["name"]) {
          checkAnswer();
          $("#options button").remove();
        } else {
          wrongAnswer();
          $("#options button").remove();
        }
      });
    });
  } // end of play function()

  function checkAnswer() {
    checkCount++;
    $("#prompt").text(`That's right! ${$("img").attr("alt")} is the answer!`);
    if ($("img").attr("alt") !== questions[questions.length - 1].name) {
      setTimeout(function() {
        nextQuestion();
      }, 3000);
    } else {
      setTimeout(function() {
        reset();
      }, 3000);
    }
  } // end of checkAnswer()

  function wrongAnswer() {
    wrongCount++;
    $("#prompt").text(`Woops! Correct answer is ${$("img").attr("alt")}.`);
    if ($("img").attr("alt") !== questions[questions.length - 1].name) {
      setTimeout(function() {
        nextQuestion();
      }, 3000);
    } else {
      setTimeout(function() {
        reset();
      }, 3000);
    }
  } // end of wrongAnswer()

  function nextQuestion() {
    currentQuestion++;
    play();
  }

  function reset() {
    $("#prompt").text(`${checkCount} check/s, ${wrongCount} mistake/s!`);
    $("img").attr({
      src:
        "https://vectr.com/adrick/a2M6L3o5Np.svg width=640&height=640&select=a2M6L3o5Nppage0",
      alt: "Pokeball"
    });
    setTimeout(function() {
      checkCount = 0;
      wrongCount = 0;
      currentQuestion = 0;
      $("#prompt").text(`Play Again?`);
      $("#play").show();
    }, 5000);
  } // end or reset()
}); // end of document.ready function
