export interface Star  {
  id: number;
  name: string;
  description: string;
  type: StarType;
  links: number[];
}

export enum StarType {
    FRONT = 'FRONT',
    LIBRARY = 'LIBRARY',
    BACK = 'BACK'
}
