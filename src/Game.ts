import { Player } from './Player';

declare var global: any;

export class Game{
  players: Player[];
  cont = true;

  constructor(players: Player[]){
    global.log.debug("Players:", players);
    this.players = players;
  }

  private recalcLoss() {
    this.cont = true;
    this.players.forEach( ( element ) => {
      global.log('Player:', element);
      if(element.isLost()) this.cont = false;
    });
  }
   continue(recalc?: boolean): boolean{
    if(recalc) this.recalcLoss();
    return this.cont;
  }

  forceStop(): void{
    this.cont = false;
  }
}
