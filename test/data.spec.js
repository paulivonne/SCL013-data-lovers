//import { example, anotherExample } from '../src/data.js';
import {filterPokeType, filterPokeOrder, searchPoke} from '../src/data.js';

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

  const arrOrderAz = [
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

    const arrOrderDes = [
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

    const arrSearch = [
        {"num": "007",
        "name": "Squirtle",
        "type": [
          "Water"]
      }]
  
  //____________________________________________________
  //Test filtro tipo

  describe('filterPokeType', () => {
    test('is a function', () => {
      expect(typeof filterPokeType).toBe('function');
    });
  
    test('returns Fire for filter type', () => {
      expect(filterPokeType(arrType,"Fire")).toEqual([{"num": "004", "name": "Charmander", "type": ["Fire"]}]);
    });
  });

  //____________________________________________________
  //Test filtro ordenar

  describe('filterPokeOrder', () => {
    test('is a function', () => {
      expect(typeof filterPokeOrder).toBe('function');
    });
  
    test('returns A-Z', () => {//A-Z
      expect(filterPokeOrder(arrData,"name")).toStrictEqual(arrData);
    });
    test('returns Z-A', () => {//Z-A
      expect(filterPokeOrder(arrData,"name")).toEqual(arrOrderAz.reverse());
    });
    
    test('returns 1-151', () => {//NºAscendente
      expect(filterPokeOrder(arrData,"num")).toEqual(arrOrderAz);
    });

    test('returns 151-1', () => {//NºDescendente
      expect(filterPokeOrder(arrData,"num")).toEqual(arrOrderDes);
    });
  });

   //____________________________________________________
  //Test search
  describe('searchPoke', () => {
    test('is a function', () => {
      expect(typeof searchPoke).toBe('function');
    });
  
    test('returns Squirtle', () => {
      expect(searchPoke(arrData,"Squirtle")).toEqual(arrSearch);
    });
  });