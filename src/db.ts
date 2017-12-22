import { Card } from "./Card";
import { Deck } from "./Deck";
import { Player } from "./Player";

export class db {
  public static Cards: Card[];
  public static Decks: Deck[];
  public static Players: Player[];

  public static init() {
    db.initCards();
    db.initDecks();
    db.initPlayers();
  }

  public static getPlayers(): Player[] {
    return db.Players;
  }

  private static initCards(): void {
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

    db.Players.push(new Player(db.Decks[0], "Joe"));
    db.Players.push(new Player(db.Decks[1], "Wheel"));

    /*
    this.players = {};
    this.players['Joe'] = new Player(this.decks['test_deck']);
    this.players['Doe'] = new Player(this.decks['test_deck']);
    */
  }
}
