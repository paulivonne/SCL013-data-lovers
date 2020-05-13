//FILTRAR POKEMON POR TIPO
export const filterPokeType = (pokedata, tipo) => {
  const newDataArray = [];
  for (let i = 0; i < pokedata.length; i += 1) {
    newDataArray.push(pokedata[i]);
  }
  return newDataArray.filter(poke => poke.type.includes(tipo));
};

//ORDENAR NÚMERO
export const filterPokeOrder = (arr, condition) => {
  let arrPokemon = [];
  if (condition === 'upward') {
    arrPokemon = arr.sort((a, b) => a.num - b.num);
  } else if (condition === 'falling') {
    arrPokemon = arr.sort((a, b) => b.num - a.num);
  } else if (condition === 'sortAz') {
    arrPokemon = arr.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } if (a.name < b.name) {
        return -1;
      }
      return 0;//
    });
  } else {
    arrPokemon = arr.sort((a, b) => {
      if (b.name > a.name) {
        return 1;
      } if (b.name < a.name) {
        return -1;
      }
      return 0;//
    });
  }
  return arrPokemon;//
};

//BUSCADOR
export const searchPoke = (pokedata, searchName)=>{
  const findPoke = pokedata.filter((pokemon) => {//
  return pokemon.name.includes(searchName);//
 });
 return findPoke; //Busqueda terminada//
};