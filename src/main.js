import data from './data/pokemon/pokemon.js';
import { filterPokeType, sortArray, searchPoke
  } from './data.js';

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



/*_________________________________________________________*/
/*IMPRIME POKEDEX EN HTML*/

const pokedata = data.pokemon;
const printPokedex = document.getElementById("root");
function showPokedex (pokedata){
let cardTemplate = "";
for (let i = 0; i < pokedata.length; i++){
  cardTemplate +=`<div class="pokemon">
                          <h1 class="namePoke">${pokedata[i].name}</h1>
                          <p class="numPoke">${pokedata[i].num}</p>
                          <img class="imgPoke" src="${pokedata[i].img}">
                          </div>`
                   
}
printPokedex.innerHTML = cardTemplate;  
}
showPokedex(pokedata);

modalPokemon(pokedata);
console.log(modalPokemon)

/*_________________________________________________________
FILTRAR POR TIPO*/
const selectType = document.getElementById("filterType");
selectType.addEventListener ("change", () => {
  let typePoke = selectType.value;
  if (typePoke === "allType"){
   showPokedex(pokedata);
    /*modalPokemon(pokedata);*/
  } else {
    let resultType = filterPokeType (pokedata, typePoke);
    showPokedex(resultType);
   
  modalPokemon (resultType);
  console.log(resultType);
  }
});

/*_________________________________________________________
ORDENAR NÚMERO*/
const orderArray = document.querySelector('#dropDown');
orderArray.addEventListener('change', () => {
  let orderSelect = orderArray.value;
  console.log(orderSelect)
  document.getElementById('root').innerHTML = '';

  let typePoke = selectType.value;
  let resultType = filterPokeType (pokedata, typePoke);

  showPokedex(sortArray(resultType, orderSelect));
  /*modalPokemon(sortArray(resultType, orderSelect));*/
});


/*_________________________________________________________
MODAL argumento:(resultType, orderSelect)*/

/*backgroundPokeModal= printModalPoke
backgroundModal = printModal
clickImg = infoUpImg (deberia ser el cuadro completo)
clickPokeImg = clickToModal
pokeImg = pokeImg
backgroundModal = modalBack
contentPokeModal = containerModal 
closeCard= infoUpX
*/

let modal= modalPokemon;

function modalPokemon(pokedata){
  let printModalPoke= document.getElementById("printModal");
  let clickToModal = document.getElementsByClassName("infoUpImg");
  
  printModalPoke.style.display="none";
  
  for(let i=0; i<clickToModal.length; i++){
  let pokeImg = clickToModal[i];

  pokeImg.addEventListener("click",() =>{
  let containerModal = document.getElementById("modalBack");
  containerModal.innerHTML="";
  printModalPoke.style.display="block";
  
  containerModal.innerHTML +=`

  <div id="modalBack">
  <div id="modalFront">

    <div id="infoUp">

      <div id="infoUp1">
        <div class="infoUpImg">
        <img src="${pokedata[i].img}">
        </div><!--infoUpImg-->
        <div class="infoUpX">
         <img src="http://imgfz.com/i/ZXahASe.png">
        </div><!--infoUpX-->
      </div><!--infoUp1-->

      <div id="infoUp2">
        <div id="infoUpName">${pokedata[i].name}</div>
        <div id="infoUpNum">${pokedata[i].num}</div>
      </div><!--infoUp2-->
      </div><!--infoUp-->

  <div id="infoDown">
        <div class="infoTitle">Tipo</div>
        <div class="infoPoke">${pokedata[i].type}</div>
        <div class="infoTitle">Peso</div>
        <div class="infoPoke">${pokedata[i].weight}</div>
        <div class="infoTitle">Altura</div>
        <div class="infoPoke">${pokedata[i].height}</div>
        <div class="infoTitle">Evolución</div>
        <div class="infoPoke" id="infoPokeEnd">${pokedata[i].next_evolution[0].name}</div>
    
    </div><!--infoDown-->
  
  </div><!--modalFront-->
</div><!--modalBack-->


<div class="btnOk">OK</div>
  </div>
  </div>
  </div>
  
  `;
  
  let close = document.getElementsByClassName("infoUpX")[0];
  close.addEventListener("click",()=> {
    printModalPoke.style.display="none";
    containerModal.innerHTML="";
  });
  
  let btnOkPoke = document.getElementsByClassName("btnOk")[0];
  btnOkPoke.addEventListener("click",()=> {
    printModalPoke.style.display="none";
    containerModal.innerHTML="";
  });
  });
  }
  }

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

