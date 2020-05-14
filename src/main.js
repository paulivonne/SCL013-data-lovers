import data from './data/pokemon/pokemon.js';
import { filterPokeType, filterPokeOrder, searchPoke
  } from './data.js';
//_________________________________________________________
/*DIRIGE A PANTALLAS*/
document.getElementById("screen2").style.display="none";
//POKEDEX de categorias lleva a pantalla2
document.getElementById("textIcon1").addEventListener("click", ()=>{
  document.getElementById("screen2").style.display="block";
  document.getElementById("screen1").style.display="none";
});
//INICIO de menú lleva a pantalla1
document.getElementById("menu1").addEventListener("click", ()=>{
  document.getElementById("screen1").style.display="block";
  document.getElementById("screen1").style.display="";
  document.getElementById("screen2").style.display="";
  document.getElementById("screen2").style.display="none";
  showPokedex(pokedata);
});
//POKEDEX de menú lleva a pantalla2
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










//_________________________________________________________
//IMPRIMIR PANTALLAS

//click en Pókedex de categorias lleva a pantalla2 e imprime info de Pokédex
document.getElementById('textIcon1').addEventListener('click', () => {
document.getElementById('containerFilters').style.display = "block"; 
 document.getElementById('rootTextFilter').innerHTML = "";
  document.getElementById('rootTextFilter').innerHTML += `
                            <main class="textContainer2" id="textContainerPokedex">
                                  <h1 id="title4">POKÉDEX</h1>
                                  <p id="text2">¿Quieres completar tu Pokédex? Conoce todos los Pokémon de la región de Kanto, filtralos por tipo y ordénalos.</p>
                                </main>
                                `;
                                showPokedex(inputName);
  });

//click en Pokédex del menú imprime info de Pokédex
  document.getElementById('menu2').addEventListener('click', () => {
  document.getElementById('containerFilters').style.display = "block"; 
  document.getElementById('rootTextFilter').innerHTML = "";
  document.getElementById('rootTextFilter').innerHTML += `
                            <main class="textContainer2" id="textContainerPokedex">
                                  <h1 id="title4">POKÉDEX</h1>
                                  <p id="text2">¿Quieres completar tu Pokédex? Conoce todos los Pokémon de la región de Kanto, filtralos por tipo y ordénalos.</p>
                                </main>
                                

                                `;
  
  
                                showPokedex(inputName);
  });

//click en Estadísticas del menú imprime info de Estadísticas
  document.getElementById('menu3').addEventListener('click', () => {
  document.getElementById('containerFilters').style.display = "none"; 
  document.getElementById('rootTextFilter').innerHTML = "";
  document.getElementById('rootTextFilter').innerHTML += `
                                <main class="textContainer2"  id="textContainerStats">
                                  <h1 id="title4">ESTADÍSTICAS</h1>
                                  <p id="text2">Las estadísticas de tus Pokémon son muy importantes para conocer su poder en combate. Filtra y ¡descubre cuáles son los mejores!</p>
                                </main>

                                </div><!--filters-->
                                
                                <div class="filters" id="filterStats">
                                  <select class="filter" name="" id="stats">
                                    <option value="upward">Stats</option>
                                    <option value="upward">Ataque</option>
                                    <option value="falling">Defensa</option>
                                    <option value="sortAz">Salud</option>
                                    <option value="sortZa">Máx. HP</option>
                                </select> 
                                
                                </div><!--filters-->

                                  `;  
  document.getElementById('root').innerHTML = "";
  document.getElementById('root').innerHTML += `
                                  <main class="textContainer2"  id="textContainerStats">
                                  <h1 id="title4">ESTADÍSTICAS</h1>
                                  <p id="text2">Las estadísticas de tus Pokémon son muy importantes para conocer su poder en combate. Filtra y ¡descubre cuáles son los mejores!</p>
                                </main>
  
  
  
  
  
                                                `;
   //aqui imprimir nueva data con filtro stats                                             
                                 // showPokedex(inputName);
    });

  //click en Crianza del menú imprime info de Crianza 
    document.getElementById('menu4').addEventListener('click', () => {
    document.getElementById('containerFilters').style.display = "none"; 
    document.getElementById('rootTextFilter').innerHTML = "";
    document.getElementById('rootTextFilter').innerHTML += `
                                  <main class="textContainer2"  id="textContainerCrianza">
                                    <h1 id="title4">CRIANZA</h1>
                                    <p id="text2">Si deseas evolucionar un Pokémon debes conocer la cantidad exacta de caramelos que necesita. Utiliza este filtro como guía las veces que quieras.</p>
                                  </main>

                                <div class="filters">
                                  <select class="filter" name="" id="filterType">
                                  <!--<option selected disabled >Caramelos</option>-->
                                    <option value="allType" id="type">Caramelos</option>
                                    <option value="Water">12</option>
                                    <option value="Bug">25</option>
                                    <option value="Dragon">50</option>
                                    <option value="Electric">100</option>
                                    <option value="Ghost">400</option>
                                </select> 
                                </div><!--filters-->
                                  
                                  `
                                  ;
                                  showPokedex(inputName);
    });


