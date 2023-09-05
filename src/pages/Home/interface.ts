export interface generatedMines {
  entradas: Array<number>;
}

export interface surebetInterface {
  home:string,
  league:string,
  away:string,
  league_name:string,
  bookmaker_id:Number,
  sport_id:Number,
  bookmaker_event_name:string,
  bookmaker_league_name:string,
  started_at:number,
  period_id:number,
  bc_id:number,
  koef:number,

}

export interface respsotaInfo{
  primeiro:surebetInterface,
  segundo:surebetInterface
}