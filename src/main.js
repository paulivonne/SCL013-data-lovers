import data from './data/pokemon/pokemon.js';
import { filterPokeType, filterPokeOrder,  filterEgg, filterCandy, 
  } from './data.js';


  const pokedata = data.pokemon; 
  const printPokedex = document.getElementById("root");



  document.getElementById("screen2").style.display="none";
  document.getElementById("screen3").style.display="none";
  document.getElementById("screen4").style.display="none";
  document.getElementById("footer").style.display="none";

//GO(MENÚ) DIRIGE SCREEN2
document.getElementById("go").addEventListener("click", ()=>{
  document.getElementById("screen2").style.display="block";
  document.getElementById("screen2").style.display="";
  document.getElementById("screen1").style.display="none";
  document.getElementById("screen3").style.display="none";
  document.getElementById("screen4").style.display="none";
  document.getElementById("footer").style.display="block";
});


//INICIO(MENÚ) DIRIGE SCREEN1
document.getElementById("menu1").addEventListener("click", ()=>{
  document.getElementById("screen1").style.display="block";
  document.getElementById("screen1").style.display="";
  document.getElementById("screen2").style.display="none";
  document.getElementById("screen3").style.display="none";
  document.getElementById("screen4").style.display="none";
  location.reload();
});
/*________SCREEN 2 POKÉDEX_________*/
//POKÉDEX(MENÚ) DIRIGE SCREEN2
document.getElementById("menu2").addEventListener("click", ()=>{
  document.getElementById("screen2").style.display="block";
  document.getElementById("screen1").style.display="none";
  document.getElementById("screen3").style.display="none";
  document.getElementById("screen4").style.display="none";
  document.getElementById("footer").style.display="block";
 
});




//IMPRIME POKEDEX EN HTML
function showPokedex (pokedata){  
  let pokeCard = "";                                  
  for (let i = 0; i < pokedata.length; i++){          
    pokeCard +=`
      <div id="pokemon">
        <h1 id="namePoke">${pokedata[i].name}
        <p id="numPoke">${pokedata[i].num}<br>
        <img id="imgPoke" src="${pokedata[i].img}"></p></h1>
        
        
        <div id="typeCont">
        <h1 class=typeTitle>TIPO</h1>
        <p id="typePoke">${(pokedata[i].type).innerHTML = trad(pokedata[i].type)}</p>
        </div>
      </div>`;
}
printPokedex.innerHTML = pokeCard;  
}
showPokedex(pokedata);

//_________________________________________________________
//FUNCIÓN FILTRAR POR TIPO
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
  let resultOrder = filterPokeType (pokedataOrder, typePoke);

  showPokedex(filterPokeOrder(resultOrder, orderSelect));
 
});









/*________SCREEN 3 STATS_________*/
//CARAMELOS(MENÚ) DIRIGE SCREEN3
document.getElementById("menu3").addEventListener("click", ()=>{
  document.getElementById("screen3").style.display="block";
  document.getElementById("screen1").style.display="none";
  document.getElementById("screen2").style.display="none";
  document.getElementById("screen4").style.display="none";
  document.getElementById("footer").style.display="block";
});


//DATA CARAMELOS

const printPokedexCandy = document.getElementById("rootCandy");
function showPokedexCandy (pokedata){ 
  let pokeCardCandy = "";                                  
  for (let i = 0; i < pokedata.length; i++){          
    pokeCardCandy +=`
      <div class="pokemonCandy">
        <div class="nameCandy">

        <img class="imgPokeCandy" src="${pokedata[i].img}"><strong>${pokedata[i].name}</strong></div>
        <p class="numCandy"><strong>Nº:</strong>${pokedata[i].num}</p>
        <p class="candyPoke"><img id="candy"src="http://imgfz.com/i/cfJOiD5.png">${tradCandy(pokedata[i].candy_count)}</p>
        <p class="evolution"><strong>Evolución:</strong>${pokedata[i].next_evolution ? pokedata[i].next_evolution[0].name : "No tiene"}</p>
      </div>
      `;
}
printPokedexCandy.innerHTML = pokeCardCandy;  
}
showPokedexCandy(pokedata);


// FUNCIÓN FILTRAR POR CARAMELOS
const selectCandy = document.getElementById("selectPokeCandy");

function pokemonCandy (pokedata){
    selectCandy.addEventListener ("change", () => {
      let typeCandy = selectCandy.value;
      if (typeCandy === "allCandy"){
        showPokedexCandy(pokedata);
      } else {
        let resultCandy= filterCandy (pokedata, typeCandy);
        showPokedexCandy(resultCandy);
      }
    });
    }
   pokemonCandy(pokedata);
   console.log(showPokedexCandy);


// FUNCIÓN TRADUCIR CARAMELOS
    function tradCandy(pokedata){
    if (pokedata == "12"){
    return "12 "
    }else if (pokedata == "25"){
    return "25"
    }else if (pokedata == "50"){
    return "50"
    }else if (pokedata == "100"){
    return "100"
    }else if (pokedata == "400"){
    return "400"
    }else{
    return "No tiene"
    }
    }















/*________SCREEN 4 EGGS_________*/
//HUEVOS(MENÚ) DIRIGE SCREEN4
document.getElementById("menu4").addEventListener("click", ()=>{
  document.getElementById("screen4").style.display="block";
  document.getElementById("screen1").style.display="none";
  document.getElementById("screen2").style.display="none";
  document.getElementById("screen3").style.display="none";
  document.getElementById("footer").style.display="block";
});

//DATA EGGS

const printPokedexEggs = document.getElementById("rootEggs");
function showPokedexEggs (pokedata){ 
  let pokeCardEgg = "";                                  
  for (let i = 0; i < pokedata.length; i++){          
    pokeCardEgg +=`
      <div id="pokemonEgg">
      <h1 id="namePokeEgg">${pokedata[i].name}
      <p id="numPokeEgg">${pokedata[i].num}</p>
      <img src="${pokedata[i].img}"></h1>
      <div>
      <img id="egg"src="http://imgfz.com/i/mSLNufh.png">
      <p id="eggPoke">${tradEggs(pokedata[i].egg)}</p>
      </div>
        
      </div>`;

}
printPokedexEggs.innerHTML = pokeCardEgg;  
}
showPokedexEggs(pokedata);
console.log(showPokedexEggs)

//_________________________________________________________
// FUNCIÓN FILTRAR POR HUEVOS
const pokedataEggs = pokedataOrder;
const selectEggs = document.getElementById("selectPokeEgg");

function pokemonEggs (pokedataEggs){
    selectEggs.addEventListener ("change", () => {
      let typeEggs = selectEggs.value;
      if (typeEggs === "allEggs"){
        showPokedexEggs(pokedataEggs);
      } else {
        let resultEggs = filterEgg (pokedataEggs, typeEggs);
        showPokedexEggs(resultEggs);
      }
    });
    }
   pokemonEggs(pokedataEggs);

//_________________________________________________________
// FUNCIÓN TRADUCIR HUEVOS
    function tradEggs(pokedataEggs){
    if (pokedataEggs == "2 km"){
    return "2 km"
    }else if (pokedataEggs == "5 km"){
    return "5 km"
    }else if (pokedataEggs == "10 km"){
    return "10 km"
    }else{
    return "No aparece<br>en huevos"
    }
    }


//_________________________________________________________
// TRADUCCION TIPO

    function trad(pokeData){
      let spanish= [];
      for(let i=0; i<pokeData.length;i++){
        if(pokeData[i] == ["Fire"]){
          spanish.push(["&nbsp;Fuego"]);
        }else if (pokeData[i] == ["Water"]){
          spanish.push(["&nbsp;Agua"]);
        }else if (pokeData[i] == ["Grass"]){
          spanish.push(["&nbsp;Planta"]);
        }else if (pokeData[i] == ["Electric"]){
          spanish.push(["&nbsp;Eléctrico"]);
        }else if (pokeData[i] == ["Ice"]){
          spanish.push(["&nbsp;Hielo"]);
        }else if (pokeData[i] == ["Fighting"]){
          spanish.push(["&nbsp;Lucha"]);
        }else if (pokeData[i] == ["Poison"]){
          spanish.push(["&nbsp;Veneno"]);
        }else if (pokeData[i] == ["Ground"]){
          spanish.push(["&nbsp;Tierra"]);      
        }else if (pokeData[i] == ["Flying"]){
          spanish.push(["&nbsp;Volador"]);
        }else if (pokeData[i] == ["Psychic"]){
          spanish.push(["&nbsp;Psíquico"]);     
        }else if (pokeData[i] == ["Bug"]){
          spanish.push(["&nbsp;Bicho"]);
        }else if (pokeData[i] == ["Rock"]){
          spanish.push(["&nbsp;Roca"]);
        }else if (pokeData[i] == ["Ghost"]){
          spanish.push(["&nbsp;Fantasma"]);
        }else if (pokeData[i] == ["Dragon"]){
          spanish.push(["&nbsp;Dragón"]);
        }else if (pokeData[i] == ["Normal"]){
          spanish.push(["&nbsp;Normal"]);
        }else {
        spanish.push(["Sin traducción"]);
      } 
    }
      return spanish;
    }

   
