//URL + Key
const key = "58668492806240b88e75b312d2881031";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${key}`;

//HTML
const gameContainer = document.querySelector(".games");

console.log(url);

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();

    const games = data.results;

    gameContainer.innerHTML = "";

    for (var i = 0; i < games.length; i++) {
        console.log(`Name: ${games[i].name}, Rating: ${games[i].rating}, Tags: ${games[i].tags.length}`);

        if (i === 7) {
            break;
        }

        gameContainer.innerHTML += `<div class="game">
                                        <h3>Name: ${games[i].name}</h3> 
                                        <p>Rating: <strong>${games[i].rating}</strong></p> 
                                        <p>Tags: <strong>${games[i].tags.length}</strong></p>
                                        </div>`
    }
}

getData(url);