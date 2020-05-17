//FILTRAR POKEMON POR TIPO

export const filterPokeType = (pokedata, tipo) => {//se declara constante con función de filtrar por tipo
  const newDataArray = [];//  declara variable que contiene array         
  for (let i = 0; i < pokedata.length; i += 1) {//bucle que recorre la data
    newDataArray.push(pokedata[i]);//se sube nuevo array de data tomando el index(posición) de pokedata
  }
  return newDataArray.filter(poke => poke.type.includes(tipo));//retorna el nuevo array de data filtrado ??
};

//ORDENAR AFABATETICAMENTE Y POR NÚMERO
export const filterPokeOrder = (arr, condition) => {//se declara const que tendra la función de ordenar tomando como parametro el arr y una condición
  let arrPokemon = [];//declara variable que contiene array
  if (condition === 'upward') {//si se selecciona opción Ascendente
    arrPokemon = arr.sort((a, b) => a.num - b.num);//la variable (toma num del array) = se ordenen de "a" a "b" (ordenUnicode)
  } else if (condition === 'falling') {//si se selecciona opción Descendente
    arrPokemon = arr.sort((a, b) => b.num - a.num);//la variable (toma num del array) = se ordenen de "b" a "a" (ordenUnicode)
  } 
  else if (condition === 'sortAz') {//se selecciona opción A-Z
    arrPokemon = arr.sort((a, b) => {//la variable (toma name del array) = se ordenen de "a" a "b" (ordenUnicode)
      if (a.name > b.name) {//esta                    
        return 1; //esta                                  
      } if (a.name < b.name) {//esta                        
        return -1; //esta                                  
      }
      return 0; //esta                                         
    });
  } 
  else {  //si no se seleccionada ninguna de las opciones de arriba pase lo siguiente (ordena de Z-A)
    arrPokemon = arr.sort((a, b) => { //la variable (toma name del array) = se ordenen de "b" a "a" (ordenUnicode)
      if (b.name > a.name) {                              
        return 1;                                       
      } if (b.name < a.name) {                      
        return -1;                                    
      }
      return 0;                                     
    });
  }
  return arrPokemon;//retorna la variable con la condición aplicada
};



//BUSCADOR

export const searchPoke = (pokedata, searchName)=>{//se declara constante con función de buscar pokemon
  const findPoke = pokedata.filter((pokemon) => {//se declara constante de la data filtrada (desde toda la data)
  return pokemon.name.includes(searchName);//retorna (desde toda la data) el nombre incluyendo ?? 
 });
 return findPoke; //Busqueda terminada
};




// FUNCIÓN FILTRAR POR HUEVOS
export const filterEgg = (pokedata,typePoke) => {
  const result = pokedata.filter((pokemon) => {
  return pokemon.egg.includes(typePoke);
  });
  return result;
};

// FUNCIÓN FILTRAR POR CARAMELOS
export const filterCandy = (pokedata, typeCandy) => {
  return pokedata.filter(poke => poke.candy_count == typeCandy);
};

