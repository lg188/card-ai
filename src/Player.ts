import {Deck} from "./Deck";

export class Player {
  public name: string;
  public LP: number;
  public lost = false;
  public deck: Deck;

  constructor(deck: Deck, name: string) {
    this.deck = deck;
    this.name = name;
    this.LP = 4000;
  }

  public isLost(): boolean {
    if (this.LP < 1) {
        this.lost = true;
    }
    return this.lost;
  }

}
