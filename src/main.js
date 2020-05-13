import data from './data/pokemon/pokemon.js';
import { filterPokeType, filterPokeOrder, searchPoke
  } from './data.js';
//_________________________________________________________
/*DIRIGE A PANTALLAS*/
document.getElementById("screen2").style.display="none";

document.getElementById("textIcon1").addEventListener("click", ()=>{
  document.getElementById("screen2").style.display="block";
  document.getElementById("screen1").style.display="none";
});
document.getElementById("menu1").addEventListener("click", ()=>{
  document.getElementById("screen1").style.display="block";
  document.getElementById("screen1").style.display="";
  document.getElementById("screen2").style.display="none";
  showPokedex(pokedata);
});

document.getElementById("menu2").addEventListener("click", ()=>{
  document.getElementById("screen2").style.display="block";
  document.getElementById("screen2").style.display="";
  document.getElementById("screen1").style.display="none";
  showPokedex(pokedata);
});

//_________________________________________________________
//IMPRIME POKEDEX EN HTML

const pokedata = data.pokemon; 
const printPokedex = document.getElementById("root"); //root de html cambia a constante printPokedex
function showPokedex (pokedata){                      //se crea función que imprime pokedex
  let pokeCard = "";                                  //
  for (let i = 0; i < pokedata.length; i++){          //
    pokeCard +=`<div class="pokemon">
                  <h1 class="namePoke">${pokedata[i].name}</h1>
                  <p class="numPoke">${pokedata[i].num}</p>
                  <img class="imgPoke" src="${pokedata[i].img}">
                </div>`
                
}
printPokedex.innerHTML = pokeCard;  
}
showPokedex(pokedata);

//_________________________________________________________
//FILTRAR POR TIPO
const pokedataFilter = pokedata;
const selectType = document.getElementById("filterType");

function pokemonFilter (pokedataFilter){
    selectType.addEventListener ("change", () => {
      let typePoke = selectType.value;
      if (typePoke === "allType"){
        showPokedex(pokedataFilter);
      } else {
        let resultType = filterPokeType (pokedataFilter, typePoke);
        showPokedex(resultType);
      }
    });
    }
    pokemonFilter(pokedataFilter);
    
//_________________________________________________________
//ORDENAR NÚMERO

const pokedataOrder = pokedataFilter;
const orderArray = document.querySelector('#dropDown');
orderArray.addEventListener('change', () => {
  document.getElementById('root').innerHTML = '';//limpia root
  let orderSelect = orderArray.value;
  let typePoke = selectType.value;
  let resultType = filterPokeType (pokedataOrder, typePoke);

  showPokedex(filterPokeOrder(resultType, orderSelect));
 
});
//_________________________________________________________
//BUSCADOR

document.getElementById('search').addEventListener('click', () => {
  document.getElementById('root').innerHTML = "";
  const searchInput = document.getElementById('searchBar').value;
  document.getElementById("searchBar").value = "";
  const searchName = searchInput.charAt(0).toUpperCase() + searchInput.slice(1).toLowerCase();
  let inputName = searchPoke(pokedata,searchName);

    for (let i = 0; i <inputName.length; i++){
       document.getElementById('root').innerHTML += `
                              <div class="pokemon">
                              <h1 class="namePoke">${inputName[i].name}</h1>
                              <p class="numPoke">${inputName[i].num}</p>
                              <img class="imgPoke" src="${inputName[i].img}">
                              </div>
                              `;
                              showPokedex(inputName);
  }
});





