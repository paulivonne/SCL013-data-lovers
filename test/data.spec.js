//import { example, anotherExample } from '../src/data.js';
import {filterPokeType, filterPokeOrder, filterEgg, filterCandy} from '../src/data.js';

/*describe('example', () => {
  test('is a function', () => {
    expect(typeof example).toBe('function');
  });

  test('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/
const arrData = [ 
  {"num": "001",
  "name": "Bulbasaur",
  "type": [
    "Grass",
    "Poison"]
  },
  {"num": "004",
  "name": "Charmander",
  "type": [
    "Fire"]
  },
  {"num": "007",
  "name": "Squirtle",
  "type": [
    "Water"]
  }]

  const arrType = [
    {"num": "004",
    "name": "Charmander",
    "type": [
      "Fire"
    ]
  }]

 /* const arrOrderAz = [
    {"num": "001",
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"]
    },
    {"num": "004",
    "name": "Charmander",
    "type": [
      "Fire"]
    },
    {"num": "007",
    "name": "Squirtle",
    "type": [
      "Water"]
    }]

    */
    /*const arrOrderDes = [
      {"num": "007",
      "name": "Squirtle",
      "type": [
        "Water"]
      },
      {"num": "004",
      "name": "Charmander",
      "type": [
        "Fire"]
      },
      {"num": "001",
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"]
      }]
      */
      
      

      const arrEgg = [
        {"name": "Charmander",
        "num": "004",
        "egg": "2 km"
      }]

      const arrCandy = [
        {"name": "Squirtle",
        "num": "007",
        "candy_count": 25,
        "next_evolution": [{
          "name": "Wartortle"
        }]
      }]




  
  //____________________________________________________
  //1. Test filtro tipo

  describe('filterPokeType', () => {
    test('is a function', () => {
      expect(typeof filterPokeType).toBe('function');
    });
  
    test('returns Fire for filter type', () => {
      expect(filterPokeType(arrType,"Fire")).toEqual([{"num": "004", "name": "Charmander", "type": ["Fire"]}]);
    });
  });

  //____________________________________________________
  //2. Test filtro ordenar

  describe('filterPokeOrder', () => {
    test('is a function', () => {
      expect(typeof filterPokeOrder).toBe('function');
    });
    
    test('returns 1-151', () => {//NºAscendente
      expect(filterPokeOrder(arrData,"num")).toEqual(arrData);
    });

    test('returns 151-1', () => {//NºDescendente
      expect(filterPokeOrder(arrData,"num")).toEqual(arrData.reverse());
    }); 

    /*test('returns 1-151', () => {//ordenar por defecto
      expect(filterPokeOrder(arrData,"num")).toEqual(arrData);
    });*/
  });


//____________________________________________________
//3. Test FUNCIÓN FILTRAR POR HUEVOS

  describe('filterEgg', () => {
    test('is a function', () => {
      expect(typeof filterEgg).toBe('function');
    });
  
    test('returns 2 km for filter egg', () => {
      expect(filterEgg(arrEgg,"2 km")).toEqual([{"name": "Charmander", "num": "004", "egg": "2 km"

      }]);
    });
  });

  //____________________________________________________
//3. Test FUNCIÓN FILTRAR POR HUEVOS

describe('filterCandy', () => {
  test('is a function', () => {
    expect(typeof filterCandy).toBe('function');
  });

  test('returns 25 for filter Candy', () => {
    expect(filterCandy(arrCandy,"25")).toEqual([{"name": "Squirtle", "num": "007", "candy_count": 25, "next_evolution": [{
      "name": "Wartortle"
    }]

    }]);

  });
});
