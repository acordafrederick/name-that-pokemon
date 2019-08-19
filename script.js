$("#play").hide();

$(document).ready(function() {
  
  var questions = [
    {
      name: "Bulbasaur",
      sprite: "https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png",
      choices: ["Finneon", "Lumineon", "Empoleon", "Bulbasaur"]
    },
    {
      name: "Cyndaquil",
      sprite: "https://cdn.bulbagarden.net/upload/9/9b/155Cyndaquil.png",
      choices: ["Meganium", "Virizion", "Cyndaquil", "Ferrothorn"]
    },
    {
      name: "Mudkip",
      sprite: "https://cdn.bulbagarden.net/upload/6/60/258Mudkip.png",
      choices: ["Mudkip", "Dewgong", "Glaceon", "Umbreon"]
    },
    {
      name: "Turtwig",
      sprite: "https://cdn.bulbagarden.net/upload/5/5c/387Turtwig.png",
      choices: ["Turtwig", "Umbreo", "Vaporeon", "Starly"]
    },
    {
      name: "Tepig",
      sprite: "https://cdn.bulbagarden.net/upload/5/5b/498Tepig.png",
      choices: ["Oshawott", "Tepig", "Patrat", "Tepig"]
    },
    {
      name: "Froakie",
      sprite: "https://cdn.bulbagarden.net/upload/1/18/656Froakie.png",
      choices: ["Fennekin", "Froakie", "Chespin", "Froakie"]
    },
    {
      name: "Rowlet",
      sprite: "https://cdn.bulbagarden.net/upload/7/74/722Rowlet.png",
      choices: ["Pikipek", "Rowlet", "Popplio", "Rowlet"]
    },
    {
      name: "Scorbunny",
      sprite: "https://cdn.bulbagarden.net/upload/c/cc/Scorbunny.png",
      choices: ["Pikipek", "Rowlet", "Popplio", "Scorbunny"]
    },
    {
      name: "Squirtle",
      sprite: "https://cdn.bulbagarden.net/upload/3/39/007Squirtle.pngg",
      choices: ["Pikipek", "Rowlet", "Squirtle", "Scorbunny"]
    },
    {
      name: "Chikorita",
      sprite: "https://cdn.bulbagarden.net/upload/b/bf/152Chikorita.png",
      choices: ["Pikipek", "Chikorita", "Popplio", "Scorbunny"]
    },
    {
      name: "Torchic",
      sprite: "https://cdn.bulbagarden.net/upload/9/91/255Torchic.png",
      choices: ["Torchic", "Rowlet", "Popplio", "Scorbunny"]
    },
    {
      name: "Piplup",
      sprite: "https://cdn.bulbagarden.net/upload/b/b1/393Piplup.png",
      choices: ["Pikipek", "Rowlet", "Popplio", "Piplup"]
    },
    {
      name: "Snivy",
      sprite: "https://cdn.bulbagarden.net/upload/7/75/495Snivy.png",
      choices: ["Pikipek", "Rowlet", "Popplio", "Snivy"]
    },
    {
      name: "Fennekin",
      sprite: "https://cdn.bulbagarden.net/upload/3/3d/653Fennekin.png",
      choices: ["Pikipek", "Fennekin", "Popplio", "Scorbunny"]
    },
    {
      name: "Popplio",
      sprite: "https://cdn.bulbagarden.net/upload/d/d8/728Popplio.png",
      choices: ["Pikipek", "Popplio", "Popplio", "Scorbunny"]
    },
    {
      name: "Grookeyo",
      sprite: "https://cdn.bulbagarden.net/upload/7/7a/Grookey.png",
      choices: ["Grookey", "Popplio", "Popplio", "Scorbunny"]
    },
    {
      name: "Charmander",
      sprite: "https://cdn.bulbagarden.net/upload/7/73/004Charmander.png",
      choices: ["Pikipek", "Popplio", "Popplio", "Charmander"]
    },
    {
      name: "Totodile",
      sprite: "https://cdn.bulbagarden.net/upload/d/df/158Totodile.png",
      choices: ["Pikipek", "Popplio", "Totodile", "Scorbunny"]
    },
    {
      name: "Treecko",
      sprite: "https://cdn.bulbagarden.net/upload/2/2c/252Treecko.png",
      choices: ["Treecko", "Popplio", "Popplio", "Scorbunny"]
    },
    {
      name: "Chimchar",
      sprite: "https://cdn.bulbagarden.net/upload/7/76/390Chimchar.png",
      choices: ["Pikipek", "Popplio", "Popplio", "Chimchar"]
    },
    {
      name: "Oshawott",
      sprite: "https://cdn.bulbagarden.net/upload/3/3b/501Oshawott.png",
      choices: ["Oshawott", "Popplio", "Popplio", "Scorbunny"]
    },
    {
      name: "Chespin",
      sprite: "https://cdn.bulbagarden.net/upload/c/ca/650Chespin.png",
      choices: ["Chespin", "Popplio", "Popplio", "Scorbunny"]
    },
    {
      name: "Litten",
      sprite: "https://cdn.bulbagarden.net/upload/0/0e/725Litten.png",
      choices: ["Litten", "Popplio", "Popplio", "Scorbunny"]
    },
    {
      name: "Sobble",
      sprite: "https://cdn.bulbagarden.net/upload/0/0c/Sobble.pngg",
      choices: ["Pikipek", "Popplio", "Sobble", "Scorbunny"]
    }
  ];

  var correctCount = 0;
  var incorrectCount = 0;
  var currentQuestion = 0;
  var seconds = 30;
  
  setTimeout(function() {
    $("#play").show();
  }, 5000);
  
}); // end of document.ready function
