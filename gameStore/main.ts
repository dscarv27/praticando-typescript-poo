import BuyGame from "./buyGame";
import Client from "./client";
import Employee from "./employee";
import Game from "./game";

let game = new Game("Dark Souls", 2011, 150);
let client = new Client("Daniel", 2500);
let employee = new Employee("Alfredo", 0);
let buy = new BuyGame(client, employee, game);

buy.detailPurchase()