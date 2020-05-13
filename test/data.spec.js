//import { example, anotherExample } from '../src/data.js';
import {filterPokeType, filterPokeOrder} from '../src/data.js';

/*describe('example', () => {
  test('is a function', () => {
    expect(typeof example).toBe('function');
  });

  test('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/
const arrData = [
  {"num": "004",
  "name": "Charmander",
  "type": [
    "Fire"]
  }, 
  {"num": "005",
  "name": "Charmeleon",
  "type": [
    "Fire"]
  },
  {"num": "006",
  "name": "Charizard",
  "type": [
    "Fire",
    "Flying"]
  }
]

const arrType = [
  {"num": "004",
  "name": "Charmander",
  "type": [
    "Fire"]}, 
  {"num": "005",
  "name": "Charmeleon",
  "type": [
    "Fire"]},
  {"num": "006",
  "name": "Charizard",
  "type": [
    "Fire",
    "Flying"]}]

const arrDataOrder = [//arrA-Z
  {"name": "Charmander"}, 
  {"name": "Squirtle"},
  {"name": "Metapod"},
  ]

  const arrDataOrderN = [//arrZ-A
  {"name": "Metapod"}, 
  {"name": "Squirtle"},
  {"name": "Charmander"},
  ]

  const arrPokeData = [ //arrOriginal
    {"name": "Charmander"}, 
    {"name": "Metapod"},
    {"name": "Squirtle"},
  ]

  //____________________________________________________
  //Test filtro tipo
  describe("filterPokeType", () => {
    test("is a function", () => {
      expect(typeof filterPokeType).toBe("function");
    });

      test("returns Fire", () => {
      expect(filterPokeType(arrData, "Fire")).toEqual(arrType);
    }); 
  });

  //____________________________________________________
  //Test filtro ordenar
  describe("filterPokeOrder", () => {
    test("is a function", () => {
      expect(typeof filterPokeOrder).toBe("function");
    });

      test("returns A-Z", () => {
      expect(filterPokeOrder(arrPokeData)).toStrictEqual(arrDataOrder);
    }); 
      test("returns Z-A", () => {
      expect(filterPokeOrder(arrPokeData)).toStrictEqual(arrDataOrder.reverse());
    }); 
    test("returns NºAscendente", () => {
      expect(filterPokeOrder(arrDataOrderN, 1)).toStrictEqual(arrDataOrder);
    }); 
      test("returns NºDescendente", () => {
      expect(filterPokeOrder(arrDataOrderN, 2)).toStrictEqual(arrDataOrderN.reverse());
    });

  });