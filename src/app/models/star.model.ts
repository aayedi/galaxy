export type Star = {
  "id": number,
  "name": string,
  "type": StarType,
  "links": number[]
}

export enum StarType {
    FRONT = "FRONT",
    LIBRARY = "LIBRARY",
    BACK = "BACK"
}