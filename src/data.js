//export const example = () => {
  //return 'example';
//};

//FILTRAR POKEMON POR TIPO
export const varType = (data,property, selectType) => {
const resultType = [];
  for (let i= 0; i <data.length; i++){ 
    for (let j= 0; j <data.length; j++){ 
      if(data[i][property][j] === selectType){
        resultType.push(data[i])
      }
    }
  }

return resultType

};


//ORDENAR POKEMON NUMERO
export const sortArray = (arr, condition) => {
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
      return 0;
    });
  } else {
    arrPokemon = arr.sort((a, b) => {
      if (b.name > a.name) {
        return 1;
      } if (b.name < a.name) {
        return -1;
      }
      return 0;
    });
  }
  return arrPokemon;
};