export type SearchResultType = {
  type: string;
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
};

export type SearchType =
  | 'bear'
  | 'bird'
  | 'cat'
  | 'cetacean'
  | 'cow'
  | 'crocodilia'
  | 'dog'
  | 'fish'
  | 'horse'
  | 'insect'
  | 'lion'
  | 'rabbit'
  | 'rodent'
  | 'snake';
