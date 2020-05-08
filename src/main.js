import data from './data/pokemon/pokemon.js';
import { varType, sortArray, searchText} from './data.js';

/*IMPRIME POKEDEX EN HTML*/

document.getElementById("screen2").style.display="none";

document.getElementById("textIcon1").addEventListener("click", ()=>{
  document.getElementById("screen2").style.display="block";
  document.getElementById("screen1").style.display="none";
});

document.getElementById("menu1").addEventListener("click", ()=>{
  document.getElementById("screen1").style.display="block";
  document.getElementById("screen1").style.display="";
  document.getElementById("screen2").style.display="none";

});








/*IMPRIME POKEDEX EN HTML*/
let pokedata = data.pokemon;

const showPokedex = document.getElementById("root");

for (let i = 0; i < pokedata.length; i++){
  showPokedex.innerHTML +=`<div class="pokemon">
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
  showPokedex.innerHTML="";
  let searchType = varType (pokedata,'type', selectType);
  for (let i= 0; i <searchType.length; i++){ 
    let findType = searchType[i];
    let showType= `<div class="pokemon" >
                  <h1 class="namePoke">${findType.name} <h1>
                  <p class="numPoke"> ${findType.num}<p>
                  <img class="imgPoke"src=${findType.img} >
                  </div>`
    showPokedex.innerHTML += `<p>${showType}<p>`
    }
    });

//----------------------------------------------------------------------------
//FILTRAR POR ORDENAR

const orderArray = document.querySelector('#filterOrder');
orderArray.addEventListener('change', () => {
  const orderSelect = orderArray.value;
  showPokedex.innerHTML = '';
  showPokedex(sortArray(pokeData, orderSelect));
});

//----------------------------------------------------------------------------
//SEARCH

const inputText = document.getElementById('#pokeSearch');
inputText.addEventListener('keyup', () => {
  const inputTextPkm = inputText.value.toLowerCase();
  showPokedex(searchText(pokedata, 'name', inputTextPkm));
  if (showPokedex.innerHTML === '') {
    showPokedex.innerHTML = `
    <section class="errorText">
      <p class="text1"> Ningún POKÉMON coincide con tu búsqueda</p>
    </section>
    `;
  }
});



