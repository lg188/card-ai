import { Deck } from './Deck';
import { Player } from './Player';
import { Card } from './Card';


export class db{
  static Cards: Card[];
  static Decks: Deck[] ;
  static Players: Player[];

  static init(){
    db.initCards();
    db.initDecks();
    db.initPlayers();
  }
  private static initCards(): void{
      db.Cards = [];

  }

  private static initDecks(): void {
    db.Decks = [];
/*
    this.cards: Card[] = [];
    cards.push(new Card('Test', 'The ultimate test card', 'TEST-000'));
    cards.push(new Card('Test Two', 'The ultimate Second test card', 'TEST-001'));

    this.decks['test_deck'] = new Deck(cards);
    */
  }

  private static initPlayers(): void {
    db.Players = [];

    db.Players.push(new Player(db.Decks[0]));
    db.Players.push(new Player(db.Decks[1]));

    /*
    this.players = {};
    this.players['Joe'] = new Player(this.decks['test_deck']);
    this.players['Doe'] = new Player(this.decks['test_deck']);
    */

  }

  static getPlayers(): Player[]{
    return db.Players;
  }
}
