import data from './data/pokemon/pokemon.js';
import { filterPokeType, sortArray, searchPoke
  } from './data.js';

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
modalPokemon(pokedata);
}
showPokedex(pokedata);


/*<div id="${pokedata[i].id}"
function showModal (pokedata){
const pokeCard = document.getElementById(${pokedata[i].id});
pokeCard.addEventListener("click",modalPokemon());
console.log("toma el click")
}*/

/*_________________________________________________________
FILTRAR POR TIPO*/
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
    
/*_________________________________________________________
ORDENAR NÚMERO*/

const pokedataOrder = pokedataFilter;
const orderArray = document.querySelector('#dropDown');
orderArray.addEventListener('change', () => {
  document.getElementById('root').innerHTML = '';//limpia root
  let orderSelect = orderArray.value;
  let typePoke = selectType.value;
  let resultType = filterPokeType (pokedataOrder, typePoke);

  showPokedex(sortArray(resultType, orderSelect));
 
});

/*Slect del filtro "tipo" funcione con ordenar
const showType = document.getElementById("type");

function showTypeOrder(pokedataOrder){
  showType.addEventListener('click', () => {
const showType = document.getElementById("type");
let selectType1 = showType.value;
 showTypeOrder(pokedataOrder);
});
}
showTypeOrder(pokedataOrder);*/
/*_________________________________________________________
MODAL argumento:(resultType, orderSelect)*/

function modalPokemon(data){
  let printModalPoke= document.getElementById("printModal");
  let clickToModal = document.getElementsByClassName("modalContent");
  let modalPoke = document.getElementsByClassName("pokemon");
  printModalPoke.style.display="none";
  for(let i=0; i<modalPoke.length; i++){
    let modal = modalPoke[i];
    modal.addEventListener("click",() =>{
      printModalPoke.style.display = ""; 

      clickToModal.innerHTML +=`
        <div id="modalBack">
        <div id="modalFront">
          <div id="infoUp">
            <div id="infoUp1">
              <div class="infoUpImg">
              <img src="${data[i].img}">
              </div><!--infoUpImg-->
              <div class="infoUpX">
              <img src="http://imgfz.com/i/ZXahASe.png">
              </div><!--infoUpX-->
            </div><!--infoUp1-->

            <div id="infoUp2">
              <div id="infoUpName">${data[i].name}</div>
              <div id="infoUpNum">${data[i].num}</div>
            </div><!--infoUp2-->
            </div><!--infoUp-->

        <div id="infoDown">
              <div class="infoTitle">Tipo</div>
              <div class="infoPoke">${data[i].type}</div>
              <div class="infoTitle">Peso</div>
              <div class="infoPoke">${data[i].weight}</div>
              <div class="infoTitle">Altura</div>
              <div class="infoPoke">${data[i].height}</div>
              <div class="infoTitle">Evolución</div>
              <div class="infoPoke" id="infoPokeEnd">Evolución: ${data[i].next_evolution ? data[i].next_evolution[0].name : 'No tiene'}</div>
              <div class="infoPoke" id="infoPokeEnd">Pre evolución: ${data[i].prev_evolution ? data[i].prev_evolution[0].name : 'No tiene'}</div>
          </div><!--infoDown-->
        
        </div><!--modalFront-->
      </div><!--modalBack-->
        `;
  
  let close = document.getElementsByClassName("infoUpX")[0];
  close.addEventListener('click', ()=>{
    printModalPoke.style.display="none";
    clickToModal.innerHTML="";
  });
  
  window.onclick = function(arroz) { 
    if (arroz.target == printModalPoke) {
      printModalPoke.style.display = "none";
      clickToModal.innerHTML="";
    }
  }
  
  });
  }
  }
  console.log(modalPokemon)
  
/*____________________________________
BUSCADOR*/

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



