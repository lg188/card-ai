import * as log from "winston";
import { db } from "./src/db";
import { Game } from "./src/Game";

declare var global: any;
global.log = log.cli();
global.log.level = "debug";

db.init();

// Configuration TODO: make this dynamic
const game = new Game(db.getPlayers());

for (let i = 1; game.continue(); i++) {
  log.info("turn(%i)", i);
  if (i >= 20) {
    game.forceStop();
  }
}
