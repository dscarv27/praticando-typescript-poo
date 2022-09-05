"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buyGame_1 = __importDefault(require("./buyGame"));
const client_1 = __importDefault(require("./client"));
const employee_1 = __importDefault(require("./employee"));
const game_1 = __importDefault(require("./game"));
let game = new game_1.default("Dark Souls", 2011, 150);
let client = new client_1.default("Daniel", 2500);
let employee = new employee_1.default("Alfredo", 0);
let buy = new buyGame_1.default(client, employee, game);
buy.detailPurchase();
