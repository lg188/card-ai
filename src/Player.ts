import {Deck} from './Deck';

export class Player{
  name: string;
  LP: number;
  lost = false;
  deck: Deck;

  constructor(deck: Deck){
    this.deck = deck;
  }

  isLost(): boolean{
    if(this.LP < 1 ){
        this.lost = true;
    }
    return this.lost;
  }

}
