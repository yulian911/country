
export type CardProps={
  flags:{
    png:string
  },
  name:string,
  population:number,
  region:string,
  capital:string
   
 }

 export type DetailsType={
  population:number,
  region:string,
  name:string,
  nativeName:string,
  flag:string,
  capital:string,
  subregion:string,
  topLevelDomain:string[],
  currencies:[
    {name:string}
  ], 
  languages:[
    {name:string}
  ]
  borders:Borders[]
}

export type Borders ={
  name:string,
}


export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}
export interface CountrySliceState {
  items: CardProps[];
  status: Status;
  item:DetailsType[]
}

export type DetailsParams ={
  name:string
}