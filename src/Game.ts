import { Player } from "./Player";

declare var global: any;

export class Game {
  public players: Player[];
  private cont = true;

  constructor(players: Player[]) {
    global.log.debug("Players:", players);
    this.players = players;
  }

  public continue(recalc?: boolean): boolean {
    if (recalc) {
      this.recalcLoss();
    }
    return this.cont;
  }

  public forceStop(): void {
    this.cont = false;
  }
  private recalcLoss() {
    this.cont = true;
    this.players.forEach( ( element ) => {
      global.log("Player:", element);
      if (element.isLost()) {
       this.cont = false;
      }
    });
  }
}
