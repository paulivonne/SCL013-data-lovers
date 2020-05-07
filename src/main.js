import data from './data/pokemon/pokemon.js';
import { varType, sortArray} from './data.js';

/*IMPRIME POKEDEX EN HTML*/
let pokedata = data.pokemon;

const container = document.getElementById("root");

for (let i = 0; i < pokedata.length; i++){
    container.innerHTML +=`<div class="pokemon">
                          <h1 class="namePoke">${pokedata[i].name}</h1>
                          <p class="numPoke">${pokedata[i].num}</p>
                          <img class="imgPoke" src="${pokedata[i].img}">
                          </div>`
}

//----------------------------------------------------------------------------
/*FILTRAR POR TIPO*/

const filter = document.getElementById ("filterType");

filter.addEventListener ("change", () => {
  let selectType = filter.options[filter.selectedIndex].value
  container.innerHTML="";
  let searchType = varType (pokedata,'type', selectType);
  for (let i= 0; i <searchType.length; i++){ 
    let findType = searchType[i];
    let showType= `<div class="pokemon" >
                  <h1 class="namePoke">${findType.name} <h1>
                  <p class="numPoke"> ${findType.num}<p>
                  <img class="imgPoke"src=${findType.img} >
                  </div>`
    container.innerHTML += `<p>${showType}<p>`
    }
    });

//----------------------------------------------------------------------------



//FILTRAR POR ORDENAR

const orderArray = document.querySelector('#filterOrder');
orderArray.addEventListener('change', () => {
  const orderSelect = orderArray.value;
  container.innerHTML = '';
  container(sortArray(pokeData, orderSelect));
});



