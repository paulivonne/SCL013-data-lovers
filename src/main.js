import data from './../data/pokemon/pokemon.js';
import { filterData } from './../data.js';

let pokedata = data.pokemon;
const container = document.getElementById("root");

for (let i = 0; i < pokedata.length; i++){
    container.innerHTML +=`<div class="pokemon"><h1>${pokedata[i].name}</h1>
                          <p>${pokedata[i].num}</p>
                          <img src="${pokedata[i].img}"></div>`
}



