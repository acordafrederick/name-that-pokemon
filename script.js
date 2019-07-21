var pokemon = [
    {
        "name": "Vaporeon",
        "sprite": "https://cdn.bulbagarden.net/upload/f/fd/134Vaporeon.png",
        "answers": ["Vaporeon", "Jolteon", "Flareon"]
    },
    {
        "name": "Jolteon",
        "sprite": "https://cdn.bulbagarden.net/upload/b/bb/135Jolteon.png",
        "answers": ["Vaporeon", "Jolteon", "Flareon"]
    },
    {
        "name": "Flareon",
        "sprite": "https://cdn.bulbagarden.net/upload/d/dd/136Flareon.png",
        "answers": ["Vaporeon", "Jolteon", "Flareon"]
    }
]

// function selectPokemon() {
//     for (var i = 0; i <= pokemon.length; i++) {
//         console.log(pokemon[i]["name"]);
//     }
// }
// selectPokemon();


function startTimer() {
    var count = 29;
    var timerHtml = document.getElementById("timer");
    var countDown = setInterval(function() {
        // console.log(count);
        timerHtml.innerHTML = count;
        count--;
        if (count === 0) {
            clearInterval(countDown);
        }
    }, 1000);
}