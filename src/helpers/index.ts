import { SearchType } from 'context/FakerContext';

export const isSearchType = (valor: string): valor is SearchType => {
  return [
    'bear',
    'bird',
    'cat',
    'cetacean',
    'cow',
    'crocodilia',
    'dog',
    'fish',
    'horse',
    'insect',
    'lion',
    'rabbit',
    'rodent',
    'snake',
  ].includes(valor);
};
